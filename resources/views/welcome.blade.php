@extends('layouts.main')

@section('title')
Home
@endsection

@section('content')
            <!-- banner start -->
            <div class="banner clearfix">
                <!-- slideshow start -->
                <div class="slideshow">
                    <!-- slider revolution start -->
                    <div class="slider-banner-container">                        
                        <a href="{{url('/auth/signup')}}" class="btn btn-lg btn-default btn-animated" id="Get_Trial_Landing_Center">Get Started<i class="fa fa-arrow-right pl-20"></i></a>
                        <div class="slider-banner-fullwidth">
                            <video autoplay="" loop="" preload="metadata" class="fillWidth">
                                <source src="/video/Advir_bg_vid_px.mp4" type="video/mp4" your="" browser="" does="" not="" support="" the="" video="" tag.="" i="" suggest="" you="" upgrade="" browser.=""/>
                                <source src="/video/Advir_bg_vid_q3.mov" type="video/mov" your="" browser="" does="" not="" support="" the="" video="" tag.="" i="" suggest="" you="" upgrade="" browser.=""/>
                                <source src="/staticvideo/Advir_bg_vid_q3.ogv" type="video/ogv" your="" browser="" does="" not="" support="" the="" video="" tag.="" i="" suggest="" you="" upgrade="" browser.=""/>
                            </video>
                        </div>
                    </div>
                    <!-- slider revolution end -->
                </div>
                <!-- slideshow end -->  
            </div>
            <!-- banner end -->

            <div id="page-start"></div>
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
@endsection