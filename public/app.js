//document ready
 $(function() {
 	//GET users from DB
     $.getJSON("/getusers", function(data) {
     	//For each user in the database, append it to the results div
         var count = 1;
         $.each(data, function(index, value) {
            if (value.satisfied === true) {
                var tenantSatisfied = 'checked';
            }
            else {
                var tenantSatisfied = '';
            }
             // $(".results").append("<div class='tenant' id='"+value._id+"'> name: " + value.firstName + " " + value.lastName + "<i class='fa fa-trash' aria-hidden='true'></i></div>");
             $('.tenantList').append('<input type="radio" name="accordion" id="cb'+count+'" /><section class="box"><label class="box-title" for="cb'+count+'">'+value.firstName+' '+value.lastName+'</label><label class="box-close" for="acc-close"></label><div class="box-content"><button class="easy-modal-open" href="#modal'+count+'">View/Edit Profile</button><br><table><tr><td>Building-Apt #: </td><td>'+value.aptNumber+'</td></tr><tr><td>Lease Expiration Date: </td><td><span class="expirationDate">'+value.leaseDateEnd+'</span></td></tr><tr><td>Total Late Fee Count: </td><td><span class="lateFeeTotal">'+value.lateFeeTotal+'</span></td></tr><tr><td>Phone #: </td><td>'+value.phoneNumber+'</td></tr><tr><td>Email Address: </td><td>'+value.emailAddress+'</td></tr></table><i class="fa fa-trash" aria-hidden="true" id="'+value._id+'"></i></div></section>');
             $('body').append('<div class="easy-modal-animated" id="modal'+count+'"><h3><span class="fn">'+value.firstName+'</span> <span class="ln">'+value.lastName+'</span></h3> <i class="fa fa-pencil-square-o editApt" aria-hidden="true"></i><hr><div id='+value._id+' class="leftModal"><br>Building-Apt #: <span class="aptNumber" placeholder="BigSky-#203">'+value.aptNumber+' </span><br><br>Lease Start Date: <span class="leaseDateStart" placeholder="01/01/2017">'+value.leaseDateStart+' </span><br><br>Lease Expiration Date: <span class="leaseDateEnd" placeholder="01/01/2017">'+value.leaseDateEnd+' </span><br><br>Phone #: <span class="phoneNumber" placeholder="111-111-1111">'+value.phoneNumber+' </span><br><br>Email Address: <span class="emailAddress" placeholder="bob@gmail.com">'+value.emailAddress+' </span></div><div class="rightModal"><br>Total Late Fee Count: <span class="lateFeeTotal" placeholder ="3">'+value.lateFeeTotal+'</span> <i class="fa fa-angle-up" aria-hidden="true"></i> <i class="fa fa-angle-down" aria-hidden="true"></i><br>Late Fee Date: <i class="fa fa-plus" id='+value._id+' aria-hidden="true"></i><div class="newLateDate"></div><ul class="allLateDates"></ul><br>5 Day Notice<br>Date Posted: <span class="noticeDate" placeholder ="01/01/2017">'+value.noticeDate+'</span><br>Expiration Date: <span class="expirationDate" placeholder="01/01/2017">'+value.expirationDate+'</span><br>Satisfied? <div class="satisfied"><input type="checkbox" id="click'+count+'" name="click'+count+'" class="click" '+tenantSatisfied+'/><label for="click'+count+'"> &nbsp; </label></div></div>');
             count++;
         })

        $('.fa-plus').click(function() {
        	$('.newLateDate').append('<input type="date"><button class="lateDate">Enter</button>');
            $('button.lateDate').click(function() {
                var lateDateEnter = $(this).siblings('input').val();
                console.log(lateDateEnter);
                $(this).parent('div.newLateDate').siblings('ul.allLateDates').append('<li>'+lateDateEnter+'</li>');
            })
        })

        $('body').on('click', '.editApt', function() {


            var currentAptNumber = $(this).parent('div').children('div.leftModal').children('span.aptNumber').text().trim();
            var currentLeaseDateStart = $(this).parent('div').children('div.leftModal').children('span.leaseDateStart').text().trim();
            var currentLeaseDateEnd = $(this).parent('div').children('div.leftModal').children('span.leaseDateEnd').text().trim();
            var currentPhoneNumber = $(this).parent('div').children('div.leftModal').children('span.phoneNumber').text().trim();
            var currentEmailAddress = $(this).parent('div').children('div.leftModal').children('span.emailAddress').text().trim();
            var currentLateFeeTotal = $(this).parent('div').children('div.rightModal').children('span.lateFeeTotal').text().trim();
            var currentNotice = $(this).parent('div').children('div.rightModal').children('span.noticeDate').text().trim();
            var currentExpirationDate = $(this).parent('div').children('div.rightModal').children('span.expirationDate').text().trim();


        	$('.aptNumber').html('<input type="text" class="newAptNumber" placeholder="BigSky-#203" value="'+currentAptNumber+'">');

            $('.leaseDateStart').html('<input type="date" class="newLeaseDateStart" placeholder="01/01/2017" value="'+currentLeaseDateStart+'">');
            
            $('.leaseDateEnd').html('<input type="date" class="newLeaseEnd" placeholder="01/01/2017" value="'+currentLeaseDateEnd+'">');

            $('.phoneNumber').html('<input type="tel" class="newPhoneNumber" placeholder="111-111-1111" value="'+currentPhoneNumber+'">');

            $('.emailAddress').html('<input type="email" class="newEmailAddress" placeholder="bob@gmail.com" value="'+currentEmailAddress+'">');

            $('.lateFeeTotal').html('<input type="number" class="newLateFeeTotal" placeholder="for ex. 3" value="'+currentLateFeeTotal+'">');

            $('.noticeDate').html('<input type="date" class="newNoticeDate" placeholder="01/01/2017" value="'+currentNotice+'">');

            $('.expirationDate').html('<input type="date" class="newExpirationDate" placeholder="01/01/2017" value="'+currentExpirationDate+'">');


        	$(this).hide();

            $(this).parent('div').append('<button class="aptSubmit">Submit</button>');

        	$('.aptSubmit').click(function() {
        		var aptNumber = $(this).siblings('.leftModal').children('span.aptNumber').children('.newAptNumber').val();

                var leaseStart = $(this).siblings('.leftModal').children('span.leaseDateStart').children('.newLeaseDateStart').val();

                var leaseDateEnd = $(this).siblings('.leftModal').children('span.leaseDateEnd').children('.newLeaseEnd').val();

                console.log(leaseDateEnd);

                var phoneNumber = $(this).siblings('.leftModal').children('span.phoneNumber').children('.newPhoneNumber').val();

                var emailAddress = $(this).siblings('.leftModal').children('span.emailAddress').children('.newEmailAddress').val();

                var lateFeeTotal = $(this).siblings('.rightModal').children('span.lateFeeTotal').children('.newLateFeeTotal').val();

                var noticeDate = $(this).siblings('.rightModal').children('span.noticeDate').children('.newNoticeDate').val();

                var expirationDate = $(this).siblings('.rightModal').children('span.expirationDate').children('.newExpirationDate').val();

                var satisfied = $(this).siblings('.rightModal').children('div.satisfied').children('input').is(':checked');

                console.log(satisfied);

        		var data = {};

        		data.aptNumber = aptNumber;
                data.leaseDateStart = leaseStart;
                data.leaseDateEnd = leaseDateEnd;
                data.phoneNumber = phoneNumber;
                data.emailAddress = emailAddress;
                data.lateFeeTotal = lateFeeTotal;
                data.noticeDate = noticeDate;
                data.expirationDate = expirationDate;
                data.satisfied = satisfied;
        		// var idToUpdate = $(this).closest('h3').attr('id');
        		var idToUpdate = $(this).parent('div').children('div.leftModal').attr('id');

        		data.firstName = $(this).parent('div.easy-modal-animated').children('h3').children('span.fn').text();

        		data.lastName = $(this).parent('div.easy-modal-animated').children('h3').children('span.ln').text();


                $(this).remove();


            $.ajax( { 
                url: "https://api.mlab.com/api/1/databases/node-capstone/collections/users/"+idToUpdate+"?apiKey=s8DkSXSn_73PP47Iwk60BRgryrW20HCf",
                data: JSON.stringify( data ),
                type: "PUT",
                contentType: "application/json",
                success: function() {
                  console.log(data);
              }
                 } );
            $('span.aptNumber').html(aptNumber);
            $('span.leaseDateStart').html(leaseStart);
            $('span.leaseDateEnd').html(leaseDateEnd);
            $('span.phoneNumber').html(phoneNumber);
            $('span.emailAddress').html(emailAddress);
            $('span.lateFeeTotal').html(lateFeeTotal);
            $('span.noticeDate').html(noticeDate);
            $('span.expirationDate').html(expirationDate);

            $('.editApt').show();
        	});
        })


        $('.lateDate').click(function() {
        	$.ajax({
             type: 'PUT',
             //convert the object to a string for the POST
             data: JSON.stringify(data),
             contentType: 'application/json',
             url: 'http://localhost:8080/getUsers/' + idToUpdate,
             success: function(data) {
                 console.log('info added successfully');
             }
         });
        })

         $('.easy-modal').easyModal({
			top: 0,
			overlay: 0.2
		});

		$('.easy-modal-open').click(function(e) {
			var target = $(this).attr('href');
			$(target).trigger('openModal');
			e.preventDefault();
		});

		$('.easy-modal-close').click(function(e) {
			$('.easy-modal').trigger('closeModal');
		});

		$('.easy-modal-animated').easyModal({
			top: 0,
			overlay: 0.2,
			transitionIn: 'animated bounceInLeft',
			transitionOut: 'animated bounceOutRight',
			closeButtonClass: '.animated-close'
		});


         $('.fa-trash').click(function() {
     	var deleteItem = $(this).attr('id');
     	console.log(deleteItem);
     	$.ajax({
             type: 'DELETE',
             //convert the object to a string for the DELETE
             // data: JSON.stringify(data),
             // contentType: 'application/json',
             url: 'http://localhost:8080/deleteUser/' + deleteItem,
             success: function(data) {
                 console.log('user deleted successfully');
             }
         });
     	$(this).parent('.box-content').parent('section').remove();
     })
         $('.fa-angle-up').click(function() {
         	var totalLate = Number($(this).siblings('.lateFeeTotal').text());
         	console.log(totalLate);
         	var newTotalLate = totalLate + 1;
         	var idToUpdate = $(this).siblings('.fa-trash').attr('id');
         	var data = {};
         	data._id = idToUpdate;
         	data.lateFees = newTotalLate;
         	console.log(data);
         	$.ajax({
             type: 'PUT',
             //convert the object to a string for the PUT
             data: JSON.stringify(data),
             contentType: 'application/json',
             url: 'http://localhost:8080/getUsers/' + idToUpdate,
             success: function(data) {
                 console.log('user updated successfully');
             }
         });
         })
     })
     //Add a new user
     $('.submit').click(function(e) {
     	//create the new user object
         var data = {};
         data.firstName = $('input#firstName').val();
         data.lastName = $('input#lastName').val();

         $.ajax({
             type: 'POST',
             //convert the object to a string for the POST
             data: JSON.stringify(data),
             contentType: 'application/json',
             url: 'http://localhost:8080/newUser',
             success: function(data) {
                 console.log('user added successfully');
             }
         });
         location.reload();
     });
 });