<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdvirTestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advirTest', function (Blueprint $table) {
            $table->increments('id');
            $table->string('userName');
            $table->string('objectName');
            $table->string('url');
            $table->string('action');
            $table->string('isActive');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('advirTest');
    }
}
