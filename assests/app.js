var tFrequency = 3;
 
        var firstTime = "03:30";
      
          
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
          console.log(firstTimeConverted);
      
         
        var currentTime = moment();
          console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
      
          
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
          console.log("DIFFERENCE IN TIME: " + diffTime);
      
          
        var tRemainder = diffTime % tFrequency;
          console.log(tRemainder);
      
          
        var tMinutesTillTrain = tFrequency - tRemainder;
          console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
      
          
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
          console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));