<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Job;
use App\JobProduct;
use App\ProductPrice;
use App\ProductImage;
use App\Product;
use Auth;
use Illuminate\Support\Facades\URL;

class ProductsController extends Controller
{

	/**
	 * Gets a detail of product
	 */
	public function getList($product_id)
	{
		if ($product_id != null) {
			$product = Product::where('id', $product_id)->get();

			$product_images = ProductImage::where('product_id', $product_id)->get();

			$base_url = URL::to('/images/products/');
			$imagesURL = [];

			foreach ($product_images as $product_image) {
				$imagesURL[] = $base_url.'/'.$product_image->filename;
			}

			$productDetail = [
				'id'      => $product_id,
				'name'    => $product[0]->name,
				'content' => $product[0]->content,
				'imagesURL'  => $imagesURL,
			];

			return response()->json($productDetail);
		}
	}

	/**
	 * Gets a list of all products
	 */
	public function getLists()
	{
		$productList = Product::get(['id', 'name']);

		$products = [];

		foreach ($productList as $product) {
			$products[] = [
				'id'   => $product->id,
				'name' => $product->name,
			];
		}

		return response()->json($products);
	}

	/**
	 * Adds a product to a job.
	 */
	public function postAdd(Request $request, $job_id)
	{
		$this->validate($request, [
			'product_id' => 'required',
			'quantity'   => 'required',
		]);

		$job = Job::findOrFail($job_id);
		$this->ensureUserIsPrimaryInstallerFor($job);

		if (JobProduct::whereJobId($request->job_id)->whereProductId($request->product_id)->exists()) {
			return response()->json(['error' => ['Product already added in this job.']], 422);
		}

		$job_product               = new JobProduct;
		$job_product->job_id       = $job_id;
		$job_product->product_id   = $request->product_id;
		$job_product->price        = Product::getPriceForAgent($job->agent, $request->product_id);
		$job_product->quantity     = $request->quantity;
		$job_product->is_collected = (bool) $request->is_collected;
		$job_product->save();

		JobNotification::create([
			'user_id'  => $this->user->id,
			'agent_id' => $job->agent_id,
			'job_id'   => $job_id,
			'message'  => 'Added a job product ' . ucwords($job_product->product->name),
			'title'    => 'Added a Job product',
			'type'     => 'info',
		]);
	}

	/**
	 * Edits a product on a job.
	 */
	public function postEdit(Request $request, $job_id, $product_id)
	{
		$this->validate($request, [
			'quantity' => 'required',
		]);

		$job = Job::findOrFail($job_id);
		$this->ensureUserIsPrimaryInstallerFor($job);

		$job_product               = JobProduct::whereJobId($request->job_id)->whereProductId($request->product_id)->firstOrFail();
		$job_product->quantity     = $request->quantity;
		$job_product->is_collected = (bool) $request->is_collected;
		$job_product->save();

		JobNotification::create([
			'user_id'  => $this->user->id,
			'agent_id' => $job->agent_id,
			'job_id'   => $job->id,
			'message'  => 'Modified a job product ' . ucwords($job_product->product->name),
			'title'    => 'Modified a Job product',
			'type'     => 'info',
		]);
	}

}
