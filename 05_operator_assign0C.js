function tcsInterviwe(gradScore, hscScore, sscScore, cadidateName) {
    var result =
      gradScore >= 70 || hscScore >= 80 || sscScore >= 90
        ? `congrates ${cadidateName} you are in eligbles for TCS interview`
        : `Unfortunately ${cadidateName} you are not eligbles for interview`;
    return result;
  }
  var result = tcsInterviwe(80, 85, 90, "akshay");
  console.log(`${result}`);
  console.log(`${tcsInterviwe(70, 60, 55, "rushikesh")}`);
  console.log(`${tcsInterviwe(60, 79, 88, "krishna")}`);