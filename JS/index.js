function formatDate(userDate) {
    
      const date = userDate.split("/");
      while(date[0].length < 2) {
          date[0] = "0" + date[0];
      }
      while(date[1].length < 2) {
          date[1] = "0" + date[1];
      }
      const apiDate = date[2]+ date[1]+ date[0];
      return apiDate;
  }

  console.log(formatDate("26/06/2020"));