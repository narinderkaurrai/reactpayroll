import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import RCarousel from 'react-elastic-carousel';


const ccItem = () => {
    let item = <span class="sunrightinner"> 
                  <div class="imgdiv">
                      <img src="./img/leagalupdates.png" />
                  </div>
                  <div class="headingtxt">
                      <h1 class="big_heading">Legal Updates</h1>
                  </div>
                  <div class="txtdiv">
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                      <p>Three dots</p>
                  </div>
              </span>;
      return item;        
  }

const Home = (props) => {

return(
  <div>
  <section class="mask slider_with_backround_image">
      <div class="container">
        <div class="slider">
            <div class="topleft">
                <h1>End to End <span class="colour_orange">Payroll Handling</span><br/>Related Compliances</h1>
                <h3>To take your business further</h3>
                <button class="button">Post A Query</button>
            </div>
        </div>
    </div>
  </section>

  <section class="aboutus pad50">
    <div class="container">
        <div class="flex-item-left">
            <h3 class="sub_heading">We do more for your world <b>_____</b></h3>
            <h1 class="big_heading">About Us</h1>
            <p>Our entity was incorporated in October 2017 with a view to ensure payroll and related compliances of organizations in order to protect them from penal provisions of labor &amp; industrial law legislations. We undertake the responsibility of payroll processing and compliances, so that organizations can focus on smooth running of their business.</p>
            <p>Our vision is to be one of the most trusted and recognized caretaker of payroll compliance both in India as well as globally.</p>
            <div class="box">
                <ul>
                    <li><span>01</span></li>
                    <li><h3>Solutions For Small Business Owners</h3></li>
                </ul>
            </div>
            <div class="box box_top_p">
                <ul>
                    <li><span class="bg_text">02</span></li>
                    <li><h3>Solutions For HR Managers And Directors</h3></li>
                </ul>
            </div>
            <div class="box box_top_p">
                <ul>
                    <li><span class="bg_text">03</span></li>
                    <li><h3>Solutions For Small Office Managers</h3></li>
                </ul>
            </div>
        </div>
        <div class="flex-item-right">
            <div class="right_img">
                <img src="./img/about_bg.png" />
            </div>
        </div>
    </div>
  </section>
  <section class="pad50 bg_gray">
            <div class="container">
                <div class="flex-item our_services">
                    <h3 class="sub_heading">Solutions By Business Size <b>_____</b></h3>
                    <h1 class="big_heading">Our Services</h1>
                    <div class="flex-container">
                        <div class="services_box sb1">
                            <div><img src="./img/s1.png" /></div>
                            <div class="box_content">
                                <h4>Monthly Payroll Processing</h4>
                                <p class="p_text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <p class="mar_top0"><a class="read_more1" href="#">Read More </a></p>
                            </div>   
                        </div>
                        <div class="services_box sb2">
                            <div><img src="./img/s2.png" /></div>
                            <div class="box_content">
                                <h4>Pay-Slips Disbursement</h4>
                                <p class="p_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <p class="mar_top0"><a class="read_more" href="#">Read More </a></p>
                            </div>   
                        </div>  
                    </div>
                    <div class="flex-container flex-container2 pad0">
                        <div class="services_box sb2 sb margin_right">
                            <div><img src="./img/s3.png" /></div>
                            <div class="box_content">
                                <h4>Profession Tax Return Filing</h4>
                                <p class="p_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <p class="mar_top0"><a class="read_more" href="#">Read More </a></p>
                            </div>   
                        </div>
                        <div class="services_box sb2 margin_left">
                            <div><img src="./img/s4.png"/></div>
                            <div class="box_content">
                                <h4>Quarterly Filing of eTDS returns</h4>
                                <p class="p_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <p class="mar_top0"><a class="read_more" href="#">Read More </a></p>
                            </div>   
                        </div>  
                    </div>
                    <p class="btnsevices"><button class="button btnwhite">View All Services</button></p>   
                </div>
            </div>
        </section> 
        <section class="pad50 news_feed">
                <div class="container">
                    <div class="margin_b50">
                        <h3 class="sub_heading">The Compliance News <b>_____</b></h3>
                        <h1 class="big_heading">News Feed</h1>
                    </div>
                </div>
                <div class="container container_flex_row ">
                    <div class="mainleftbox">
                  
                    <Carousel autoPlay={true} interval={5000} infiniteLoop={true} axis={'vertical'} selectedItem={props.sliderTwoIndex} showArrows={false} renderIndicator={null} showStatus={false} >
                        <span>
                        <div class="innerbox">
                            <div class="leftbox">
                                <img src="./img/nf1.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        <div class="innerbox nar_margin_top_2">
                            <div class="leftbox">
                                <img src="./img/nf2.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        <div class="innerbox nar_margin_top_2">
                            <div class="leftbox">
                                <img src="./img/nf3.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        <div class="innerbox nar_margin_top_2">
                            <div class="leftbox">
                                <img src="./img/nf4.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        </span>
                        <span>
                        <div class="innerbox">
                            <div class="leftbox">
                                <img src="./img/nf1.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        <div class="innerbox nar_margin_top_2">
                            <div class="leftbox">
                                <img src="./img/nf2.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        <div class="innerbox nar_margin_top_2">
                            <div class="leftbox">
                                <img src="./img/nf3.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        <div class="innerbox nar_margin_top_2">
                            <div class="leftbox">
                                <img src="./img/nf4.png" />
                            </div>
                            <div class="rightbox">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                        </span>
                        </Carousel>
                       
                        <div class="innerbox_arrow nar_margin_top_2">
                            <div onClick={props.slTwoClick} class="leftbox_arrow  background_color_different arrow_width_height">
                                <img src="./img/arrow.png"  class="nar_img_hor nar_arrow_width" />
                            </div>
                            <div onClick={props.srTwoClick} class="rightbox_arrow  background_color_different arrow_width_height">
                                <img src="./img/arrow.png" class="nar_arrow_width" />
                            </div>
                        </div>
                    </div>
                       
                    <div class="mainrightbox slider_3_wrap_div">
                            <div class="sunrightinner">
                            
                             <Carousel autoPlay={true} showThumbs={false} interval={5000} infiniteLoop={true} axis={'horizontal'} showArrows={false}   showStatus={false} >
                                <div class="slider_3_div">
                                        <img class="slider3_img" src="./img/leagalupdates.png" />
                                        <span class="slider3_text">Legal Updates</span>
                                        <span class="slider3_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                                     
                                </div>

                                <div class="slider_3_div">
                                        <img class="slider3_img" src="./img/leagalupdates.png" />
                                        <span class="slider3_text">Legal Updates</span>
                                        <span class="slider3_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                                   
                                </div>
                                
                                <div class="slider_3_div">
                                        <img class="slider3_img" src="./img/leagalupdates.png" />
                                        <span class="slider3_text">Legal Updates</span>
                                        <span class="slider3_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                                   
                                </div>
                                
                            </Carousel>  
                        </div>
                    
                    </div>
                </div>
        </section>
        <section class="pad50 bg_gray">
            <div class="container justify_center">
                <div class="flex_item_center">
                    <h3 class="sub_heading">Who we are <b>_____</b></h3>
                    <h1 class="big_heading">Meet The Team</h1>
                </div>
            </div>
            <div class="container_next_top">
                <div class="container_next">
                    <div class="innerbox_arrow nar_margin_top_2 justify_right">
                        <div onClick={props.slClick} class="leftbox_arrow  background_color_different arrow_width_height">
                            <img src="./img/arrow.png"  class="nar_img_hor nar_arrow_width" />
                        </div>
                        <div onClick={props.srClick} class="rightbox_arrow  background_color_different arrow_width_height">
                            <img src="./img/arrow.png" class="nar_arrow_width" />
                        </div>
                    </div>
                </div>
                {/* onClickItem={onClickItem} abc={props.sliderIndex}  onChange={onChange} */}
                <Carousel showArrows={false} selectedItem={props.sliderIndex} renderIndicator={null} showStatus={false} >
                <div class="slider_div_wrapper nar_margin_top_2">
                        
                        <div class="singlepiece">
                            <div class="imgsec">
                                <img src="./img/team_1.png" alt="" class="img_slider" />
                            </div>
                            <div class="team_name">
                                <h3>Radha Krishna</h3>
                            </div>
                            <div class="team_desig">
                                <h3>Consultant</h3>
                            </div>
                        </div>
                        <div class="singlepiece nar_margin_left">
                            <div class="imgsec">
                                <img src="./img/team_2.png" alt="" class="img_slider" />
                            </div>
                            <div class="team_name">
                                <h3>K. Madhu Kumar</h3>
                            </div>
                            <div class="team_desig">
                                <h3>Compliance Manager</h3>
                            </div>
                        </div>
                        <div class="singlepiece nar_margin_left">
                            <div class="imgsec">
                                <img src="./img/team_3.png" alt="" class="img_slider" />
                            </div>
                            <div class="team_name">
                                <h3>Gopinath Surey</h3>
                            </div>
                            <div class="team_desig">
                                <h3>Advisor</h3>
                            </div>
                        </div>
                      
                </div>
                <div class="slider_div_wrapper nar_margin_top_2">
                        
                        <div class="singlepiece">
                            <div class="imgsec">
                                <img src="./img/team_1.png" alt="" class="img_slider" />
                            </div>
                            <div class="team_name">
                                <h3>Radha Krishna</h3>
                            </div>
                            <div class="team_desig">
                                <h3>Consultant</h3>
                            </div>
                        </div>
                        <div class="singlepiece nar_margin_left">
                            <div class="imgsec">
                                <img src="./img/team_2.png" alt="" class="img_slider" />
                            </div>
                            <div class="team_name">
                                <h3>K. Madhu Kumar</h3>
                            </div>
                            <div class="team_desig">
                                <h3>Compliance Manager</h3>
                            </div>
                        </div>
                        <div class="singlepiece nar_margin_left">
                            <div class="imgsec">
                                <img src="./img/team_3.png" alt="" class="img_slider" />
                            </div>
                            <div class="team_name">
                                <h3>Gopinath Surey</h3>
                            </div>
                            <div class="team_desig">
                                <h3>Advisor</h3>
                            </div>
                        </div>
                      
                </div>
                </Carousel>     
            </div>    
        </section>
        <footer class="pad_footer footer_bg">
            <div class="container container_footer1 justify_center_footer">
                <div class="linksdiv">
                    <div class="imgdivfooter">
                        <img src="./img/final_logo.png" alt="" class="fllogo"/>
                    </div>
                    <div class="quicklimksdiv">
                        <ul>
                            <li class="lihead">
                                <h3>Quick Links</h3>
                            </li>
                            <li>
                                <div class="arrowlinks">
                                    <img src="./img/arrow.png" alt=""/>
                                </div>
                                <div class="textlink">Home</div>
                            </li>
                            <li>
                                <div class="arrowlinks">
                                    <img src="./img/arrow.png" alt=""/>
                                </div>
                                <div class="textlink">About Us</div>
                            </li>
                            <li>
                                <div class="arrowlinks">
                                    <img src="./img/arrow.png" alt=""/>
                                </div>
                                <div class="textlink">Our Client</div>
                            </li>
                            <li>
                                <div class="arrowlinks">
                                    <img src="./img/arrow.png" alt=""/>
                                </div>
                                <div class="textlink">Contact Us</div>
                            </li>
                            <li>
                                <div class="textlink follow_us">Follow Us:</div>
                            </li>
                            <li>
                                <div class="iconswrap socials_icon_foot">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="./img/fb.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./img/in.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./img/twitter.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./img/youtube.png" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul>        
                    </div>
                    <div class="contactinfodiv">
                            <ul>
                                <li class="lihead">
                                    <h3>Contact Info</h3>
                                </li>
                                <li>
                                    <div class="arrowlinks">
                                        <a href="#">
                                            <img src="./img/foot_icon1.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="textlink">operations@payrollventures.com</div>
                                </li>
                                <li>
                                    <div class="arrowlinks">
                                        <a href="#">
                                            <img src="./img/foot_icon2.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="textlink">+91-40-27637035 | +91-63037-16930</div>
                                </li>
                                <li>
                                    <div class="arrowlinks">
                                        <a href="#">
                                            <img src="./img/foot_icon3.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="textlink">Hyderabad | Visakhapatnam Vijaywada</div>
                                </li>
                                <li>
                                    <div class="arrowlinks">
                                        <a href="#">
                                            <img src="./img/foot_icon4.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="textlink">www.payrollventures.in</div>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            <div class="copyrightdiv">
                <h3 class="copyrighth3">
                    &#169; Copyright 2021 Payroll. All Rights Reserved.
                </h3>
            </div>
        </footer>
       
  </div>
)};

export default Home;