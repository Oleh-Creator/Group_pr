<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/6d3dedaef2.js" crossorigin="anonymous"></script>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <title>Lviv</title>
    <link rel="icon" href="./img/logo.png">
</head>
<body>
    <div class="wrap">
    <header>
        <div class="itemsBox">
            <div class="furstItBox">
            <div class="headerItem">
              <div onclick="scrollToElement()"><a href="#" id="headItTex1">Explore</a></div>  
                <br>
                <div class="hedItLine" id="hedItLine1"></div>
            </div>
            <div class="headerItem">
                <div><a href="#" id="headItTex2">Hotels</a></div>
                <br>
                <div class="hedItLine" id="hedItLine2"></div>
            </div>
            <div class="headerItem">
                <div><a href="#" id="headItTex3">Events</a></div>
                <br>
                <div class="hedItLine" id="hedItLine3"></div>
            </div>
            <div class="headerItem">
             <div> <a href="#" id="headItTex4">Resturants</a></div> 
                <br>
                <div class="hedItLine" id="hedItLine4"></div>
            </div>
            </div>
            <a href="index.html"><img src="./img/logo.png" class="Logo" alt=""></a>
            <div class="secondItBox">
            <div class="headerItem">
              <div><a href="#" id="headItTex5">About Lviv</a></div>  
                <br>
                <div class="hedItLine" id="hedItLine5"></div>
            </div>
            <div class="headerItem">
               <div><a href="#" id="headItTex6">Bonuses</a></div> 
                <br>
                <div class="hedItLine" id="hedItLine6"></div>
            </div>
            <br>
            <i class="fa-regular fa-heart headHeart"></i>
            <br>
            <i class="fa-solid fa-magnifying-glass headGlass"></i>
            <br>
            <select name="number">
                <option>Eng</option>
                <option>Ukr</option>
                </select>
        </div>
        </div>
    </header>

   
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide Slide1"  id="Sw1Sl" style="padding-top: 20%; cursor: pointer;"><div class="textSwBox"><p>Romantic places</p></div></div>
          <div class="swiper-slide Slide2"  id="Sw1Sl" style="padding-top: 20%; cursor: pointer;"><div class="textSwBox"><p>Lviv Hotels</p></div> </div>
          <div class="swiper-slide Slide3"  id="Sw1Sl" style="padding-top: 20%; cursor: pointer;"><div class="textSwBox"><p>Cafes & Resturants</p></div></div>
         
        </div>
        <div class="SwPgLine"><div class="swiper-pagination" style="position:relative; margin-top: -30%; left: 8%; display: flex;"></div></div>
      </div>

      <div class="AboutLviv">
        <div class="AboutInfBox">
          <p style="font-size: 5vw;color: #8B6A6A">About Lviv</p>
          <br>
          <div class="AboutInf">
          <p style="color: black;">LVIV IS THE PEARL OF WESTERN UKRAINE. A CITY THAT FOR CENTURIES STOOD ON THE BORDER BETWEEN EASTERN AND WESTERN CULTURES, A CITY RICH IN HISTORICAL EVENTS, A CITY OF UNIQUE ARCHITECTURAL MONUMENTS AND ENSEMBLES. EXCURSIONS IN LVIV WILL LEAVE A LOT OF POSITIVE EMOTIONS. WE INVITE YOU ON A TRIP TO LVIV.</p>
        </div>
        <br>
        <br>
        <div class="AboutIconsBox">
          <div class="AboutIconsLine">
            <div class="AboutIcon">
              <img src="./img/AboutIc1.png" alt="">
              <p>GENERAL INFORMATION</p>
            </div>
            <div class="AboutIcon">
              <img src="./img/AboutIc2.png" alt="">
              <p>TOP ATTRACTIONS</p>
            </div>
            <div class="AboutIcon">
              <img src="./img/AboutIc3.png" alt="">
              <p>GETTING TO LVIV</p>
            </div>
            <div class="AboutIcon">
              <img src="./img/AboutIc8.png" alt="">
              <p>WHERE TO EAT</p>
            </div>
          </div>
          <br>
          <br>
          <div class="AboutIconsLine">
            <div class="AboutIcon">
              <img src="./img/AboutIc4.png" alt="">
              <p>WHERE TO STAY</p>
            </div>
            <div class="AboutIcon">
              <img src="./img/AboutIc5.png" alt="">
              <p>UPCOMING EVENTS</p>
            </div>
            <div class="AboutIcon">
              <img src="./img/AboutIc6.png" alt="">
              <p>TOURS</p>
            </div>
            <div class="AboutIcon">
              <img src="./img/AboutIc7.png" alt="">
              <p>MAP</p>
            </div>
          </div>
        </div>
        </div>
        <div class="AboutPhotoBox">
          <div class="AboutLvPhoto AboutLvPhoto1" style="background-image: url(./img/AboutLvivPhoto1.png);"></div>
          <div class="AboutLvPhoto AboutLvPhoto2" style="background-image: url(./img/AboutLvivPhoto2.png);"></div>
          <div class="AboutLvPhoto AboutLvPhoto3" style="background-image: url(./img/AboutLvivPhoto3.png);"></div>
        </div>
      </div>

    <div class="UpcomingEvents">
      <div class="UpComLogoBox">
        <div class="AllEvLogBox">
          <img src="./img/calendar.png" alt="" class="AllEvLogImg">
          <p>All events</p>
        </div>
        <p style="font-size: 5vw; color: #8B6A6A">Upcoming Events</p>
      </div>
      <br>
      <div class="UpComSelectBox">
        <p style="color: black; font-weight: 900;">MAIN EVENTS</p>
        <p>PARTIES</p>
        <p>FESTIVALS</p>
        <p>CONSERTS</p>
        <p>SPORT</p>
        <p>EVENTS THIS WEEK</p>
        <p>EXHIBITIONS</p>
      </div>
    <div class="swBox">
      <div class="swiper mySwiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" id="Sw2Sl" style="background-image: url(./img/UpComItem1.png); cursor: pointer;"><div class="textSwBox">
            <div class="SWLogLine">
                <div class="SwLogBox" style=" width: 100px;">
                <div class="ConsOval" style=" background-color: #FCCCB8;"></div>
                <p>Concerts</p>
            </div>
            <i class="fa-regular fa-heart" style="cursor: pointer;"></i>
            </div>
            <div class="SwInfLine">
                <div class="SwInfBox">
                <p style="font-size: 12px; color: #FCCCB8;">04 March - 27 april 19:25</p>
                <p style="opacity: 1; color: white; font-size: 23px;">Concert Hall events</p>
                <div class="SwLocateBox">
                    <img src="./img/Locate.png" alt="">
                    <br>
                    <p>Lviv Organ Hall, Liberty Avenue 28</p>
                </div>
            </div>
            <p style=" color: #FCCCB8; display: flex; font-size: 18px;">150 ₴</p>
            </div>
          </div></div>
          <div class="swiper-slide"  id="Sw2Sl"style="background-image: url(./img/UpComItem2.png);  cursor: pointer;""><div class="textSwBox">
            <div class="SWLogLine">
                <div class="SwLogBox">
                <div class="ConsOval" style=" background-color: #69EDFF;"></div>
                <p>Event this week</p>
            </div>
            <i class="fa-regular fa-heart" style="cursor: pointer;"></i>
            </div>
            <div class="SwInfLine">
                <div class="SwInfBox">
                <p style="font-size: 12px; color: #69EDFF;">26 March 16:00</p>
                <p style="opacity: 1; color: white; font-size: 23px;">Car racing</p>
                <div class="SwLocateBox">
                    <img src="./img/Locate.png" alt="">
                    <br>
                    <p>Lviv, Pivnichna street</p>
                </div>
            </div>
            <p style=" color: #69EDFF; display: flex; font-size: 18px;">150 ₴</p>
            </div>
          </div> </div>
          <div class="swiper-slide" style="background-image: url(./img/UpComItem3.png);  cursor: pointer;""><div class="textSwBox">
            <div class="SWLogLine">
                <div class="SwLogBox">
                <div class="ConsOval" style=" background-color: #fff;"></div>
                <p>Museum</p>
            </div>
            <i class="fa-regular fa-heart" style="cursor: pointer;"></i>
            </div>
            <div class="SwInfLine">
                <div class="SwInfBox" style="padding-left: 20px;">
                <p style="font-size: 12px; color: #fff;">26 March 16:00</p>
                <p style="opacity: 1; color: white; font-size: 23px;">Quest of the City Museum</p>
                <div class="SwLocateBox" style="width: 170px;">
                    <img src="./img/Locate.png" alt="">
                    <br>
                    <p>Lviv, Velykoho street 14A</p>
                </div>
            </div>
            <p style=" color: #fff; display: flex; font-size: 18px;">150₴</p>
            </div>
          </div></div>
          <div class="swiper-slide" style="background-image: url(./img/UpComItem1.png);  cursor: pointer;"><div class="textSwBox"><p>Romantic places</p></div></div>
          <div class="swiper-slide" style="background-image: url(./img/UpComItem2.png);  cursor: pointer;"><div class="textSwBox"><p>Lviv Hotels</p></div> </div>
          <div class="swiper-slide" style="background-image: url(./img/UpComItem3.png);  cursor: pointer;"><div class="textSwBox"><p>Cafes & Resturants</p></div></div>
         
        </div>
      </div>
    </div>

      <div class="explore" id="targetElement">
        <p class="exploreText">Explore</p>
      </div>
</div>


    <script src="main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
</body>
</html>
