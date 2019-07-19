/*global $*/
$(function() {
// Function to replaces the display content to the Location information upon detecting mouse click
    $("#contact-locate").click(function() {
        $("#contact-text-textbox").html(
            `<div class="row w-100 m-0">
                <div class="col-md-5 col-12 
                            p-xl-4 p-lg-3 p-2
                            text-center">
                    <h2 class="text-center"><u>Locate Us</u></h2>
                    <p>ADDRESS : LOT 88 SELEGIE ROAD SINGAPORE (180008)</p>
                    <h4 class="text-warning">Find your direction</h4>
                    <form>
                        <input type="text" placeholder="Enter your location" />
                        <button class="bg-warning">Guide me there now!</button>
                    </form><br>

                    <h5 class="card-title gold"><strong>Follow Us</strong></h5>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-google"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
                <div class="col-md col-12 
                            pt-lg-4 pt-md-4 pt-2 ">
                    <image src="image/location.jpg" class="map-image"></image>
                </div>
            </div>`).hide().fadeIn(500);
    })
// Function to replaces the display content to the Contact Details information upon detecting mouse click
    $("#contact-details").click(function() {
        $("#contact-text-textbox").html(
            `<div class="m-5">
            <h2><u>Contact Our Specialists</u></h2>
            <div class="text-left row mt-5 justify-content-around">
                <div class="contact-list text-warning">
                    <h5>Ace Ang</h5>
                    <h5>Bravo Ang</h5>
                    <h5>Charlie Ang</h5>
                </div>
                <div class="contact-list">
                    <div><a href="tel:+6597802808">+65 9780 2808</a></div>
                    <div><a href="tel:+6597803808">+65 9780 3808</a></div>
                    <div><a href="tel:+6597804808">+65 9780 4808</a></div>
                </div>  
            </div>
            </div>`).hide().fadeIn(500);
    })
// Function to replaces the display content to the Join Us information & form upon detecting mouse click
    $("#contact-join-us").click(function() {
        $("#contact-text-textbox").html(
            `<div class="m-5"> 
            <h2>Join Us page</h2>
            <p>We are looking for people who are constantly looking to grow and improve themselves.<br>Our company motto is<br><h4 class="text-warning">Being Happy!</h4></p>
            <form>
                <input type="text" placeholder="Enter your Exciting name"/>
                <input type="text" placeholder="Contact number"/>
                <input type="text" placeholder="Position applying"/><br>
                <button class="bg-warning mt-3">Hire Me!</button>
            </form>
            </div>`).hide().fadeIn(500);

    })
// Function to replaces the display content to the Feedback Form upon detecting mouse click
    $("#contact-feedback").click(function() {
        $("#contact-text-textbox").html(
            `<div class="m-5">
            <h2>We value your feedback</h2>
            <p>We are alway constantly looking to improve our people and system<br><h4 class="text-warning">Always Learning! Always Improving!</h4></p>
            <form>
                <input type="text" placeholder="Enter your name"/>
                <input type="text" placeholder="Contact number"/><br>
                <textarea class="  w-50" placeholder="Enter your feedback here"></textarea><br>                        
                <input type="button" class="submit badge-warning mt-2" value="Submit!"/>
            </form>
            </div>`).hide().fadeIn(500);
    })
})
