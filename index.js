var userImageLink =  
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecmAQnX4rTiKeiwWCH36vx-P7x4uuMVPwxg&usqp=CAU"; 

            var time_start, end_time; 
            
            // The size in bytes 
            var downloadSize = 5616998; 
            var downloadImgSrc = new Image(); 
  
            downloadImgSrc.onload = function () { 
                end_time = new Date().getTime(); 
                displaySpeed(); 
            }; 
            time_start = new Date().getTime(); 
            downloadImgSrc.src = userImageLink; 
            document.write("time start: " + time_start); 
            document.write("<br>"); 
  
            function displaySpeed() { 
                var timeDuration = (end_time - time_start) / 1000; 
                var loadedBits = downloadSize * 8; 
                
                /* Converts a number into string 
                   using toFixed(2) rounding to 2 */
                var bps = (loadedBits / timeDuration).toFixed(2); 
                var speedInKbps = (bps / 1024).toFixed(2); 
                var speedInMbps = (speedInKbps / 1024).toFixed(2); 
                alert("Your internet connection speed is: \n" 
                      + bps + " bps\n" + speedInKbps  
                      + " kbps\n" + speedInMbps + " Mbps\n"); 
            }