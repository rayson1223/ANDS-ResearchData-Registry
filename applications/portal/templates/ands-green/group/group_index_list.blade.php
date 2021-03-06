@extends('layouts/single-with-search')
@section('content')
<article>
    <section class="section swatch-white">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <header class="text-center element-normal-top element-medium-bottom not-condensed os-animation animated fadeInUp" data-os-animation="fadeInUp" data-os-animation-delay="0s" style="-webkit-animation: 0s;">
                       <h1 class="bigger hairline bordered bordered-normal os-animation animated fadeIn" data-os-animation="fadeIn" data-os-animation-delay="0s" style="-webkit-animation: 0s;">Who Contributes to Research Data Australia</h1>
                       {{ sizeof($contributors) }} research organisations from around Australia contribute information to Research Data Australia.
                       <p> <a href="{{ portal_url('contributors') }}">Thumbnail View</a> </p>
                   </header>

               </div>
           </div>
           <div class="row">
            <?php uasort($contributors, 'alphasort_byattr_title'); ?>
              <ul class="col3">
                @foreach($contributors as $group)
                <li>
                  <a href="{{portal_url('contributors/'.$group['slug'])}}" target="_self">{{$group['title']}}</a>
                </li>
                @endforeach
              </ul>
            </div>
           </div>
       </div>
    </section>
</article>
@stop