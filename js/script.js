$(document).ready(function () {
  $("#example").DataTable({
    //disable sorting on last column
    columnDefs: [{ orderable: false, targets: 5 }],
    language: {
      //customize pagination prev and next buttons: use arrows instead of words
      paginate: {
        previous: '<span class="fa fa-chevron-left"></span>',
        next: '<span class="fa fa-chevron-right"></span>',
      },
      //customize number of elements to be displayed
      lengthMenu:
        ' <h2>Finance<h2>'
    },
  });
});

var data = [
  {
    imageUrl: "http://dummyImage/1.png",
    id: "1",
    companyName: "Savorybites",
    issueDate: "12/01/24",
    paymentDate: "12/01/24",
    industry: "Fitness",
    MobileNumber: "8956369962",
    Status: "Paid",
  },
  {
    imageUrl: "http://dummyImage/2.png",
    id: "2",
    companyName: "HealthyCo",
    issueDate: "10/02/24",
    paymentDate: "10/02/24",
    industry: "Cosmeceutical",
    MobileNumber: "9988776655",
    Status: "Pending",
  },
  {
    imageUrl: "http://dummyImage/3.png",
    id: "3",
    companyName: "Foodies",
    issueDate: "09/03/24",
    paymentDate: "09/03/24",
    industry: "Non Food",
    MobileNumber: "8866554433",
    Status: "Cancelled",
  },
  {
    imageUrl: "http://dummyImage/4.png",
    id: "4",
    companyName: "BodyFlex",
    issueDate: "15/04/24",
    paymentDate: "15/04/24",
    industry: "Fitness",
    MobileNumber: "7744552211",
    Status: "Paid",
  },
  {
    imageUrl: "http://dummyImage/5.png",
    id: "5",
    companyName: "GlowSkincare",
    issueDate: "22/05/24",
    paymentDate: "22/05/24",
    industry: "Cosmeceutical",
    MobileNumber: "6677889900",
    Status: "Pending",
  },
  {
    imageUrl: "http://dummyImage/6.png",
    id: "6",
    companyName: "VitalFoods",
    issueDate: "30/06/24",
    paymentDate: "30/06/24",
    industry: "Non Food",
    MobileNumber: "5566778899",
    Status: "Cancelled",
  },
  {
    imageUrl: "http://dummyImage/7.png",
    id: "7",
    companyName: "StrongFit",
    issueDate: "05/07/24",
    paymentDate: "05/07/24",
    industry: "Fitness",
    MobileNumber: "4455667788",
    Status: "Paid",
  },
  {
    imageUrl: "http://dummyImage/8.png",
    id: "8",
    companyName: "CosmoCares",
    issueDate: "18/08/24",
    paymentDate: "18/08/24",
    industry: "Cosmeceutical",
    MobileNumber: "3344556677",
    Status: "Pending",
  },
  {
    imageUrl: "http://dummyImage/9.png",
    id: "9",
    companyName: "NutriLife",
    issueDate: "21/09/24",
    paymentDate: "21/09/24",
    industry: "Non Food",
    MobileNumber: "2233445566",
    Status: "Cancelled",
  },
  {
    imageUrl: "http://dummyImage/10.png",
    id: "10",
    companyName: "FlexGym",
    issueDate: "25/10/24",
    paymentDate: "25/10/24",
    industry: "Fitness",
    MobileNumber: "1122334455",
    Status: "Paid",
  },
  {
    imageUrl: "http://dummyImage/11.png",
    id: "11",
    companyName: "BeautyEssentials",
    issueDate: "12/11/24",
    paymentDate: "12/11/24",
    industry: "Cosmeceutical",
    MobileNumber: "9988776644",
    Status: "Pending",
  },
  {
    imageUrl: "http://dummyImage/12.png",
    id: "12",
    companyName: "GreenEats",
    issueDate: "07/12/24",
    paymentDate: "07/12/24",
    industry: "Non Food",
    MobileNumber: "8877665544",
    Status: "Cancelled",
  },
  {
    imageUrl: "http://dummyImage/13.png",
    id: "13",
    companyName: "MuscleWorks",
    issueDate: "22/01/25",
    paymentDate: "22/01/25",
    industry: "Fitness",
    MobileNumber: "7766554433",
    Status: "Paid",
  },
  {
    imageUrl: "http://dummyImage/14.png",
    id: "14",
    companyName: "DermaGlow",
    issueDate: "10/02/25",
    paymentDate: "10/02/25",
    industry: "Cosmeceutical",
    MobileNumber: "6655443322",
    Status: "Pending",
  },
  {
    imageUrl: "http://dummyImage/15.png",
    id: "15",
    companyName: "OrganicFoods",
    issueDate: "19/03/25",
    paymentDate: "19/03/25",
    industry: "Non Food",
    MobileNumber: "5544332211",
    Status: "Cancelled",
  },
  {
    imageUrl: "http://dummyImage/16.png",
    id: "16",
    companyName: "FitBody",
    issueDate: "02/04/25",
    paymentDate: "02/04/25",
    industry: "Fitness",
    MobileNumber: "4433221100",
    Status: "Paid",
  },
  {
    imageUrl: "http://dummyImage/17.png",
    id: "17",
    companyName: "CosmeticsCo",
    issueDate: "15/05/25",
    paymentDate: "15/05/25",
    industry: "Cosmeceutical",
    MobileNumber: "3322110099",
    Status: "Pending",
  },
  {
    imageUrl: "http://dummyImage/18.png",
    id: "18",
    companyName: "EcoFoods",
    issueDate: "23/06/25",
    paymentDate: "23/06/25",
    industry: "Non Food",
    MobileNumber: "2211009988",
    Status: "Cancelled",
  },
  {
    imageUrl: "http://dummyImage/19.png",
    id: "19",
    companyName: "GymPro",
    issueDate: "07/07/25",
    paymentDate: "07/07/25",
    industry: "Fitness",
    MobileNumber: "1100998877",
    Status: "Paid",
  },
  {
    imageUrl: "http://dummyImage/20.png",
    id: "20",
    companyName: "BeautyGlow",
    issueDate: "16/08/25",
    paymentDate: "16/08/25",
    industry: "Cosmeceutical",
    MobileNumber: "0099887766",
    Status: "Pending",
  },
];


const statusColor={
  Paid:"green",
  Cancelled:"red",
  Pending:"orange"
}


const tableEl = document.getElementById("tableBody");

data.map((row) => {
  let trEl = document.createElement("tr");
  trEl.innerHTML = `  <td><img src="https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=180" class="rounded-circle profile-chip" alt="Profile"></td>
                  <td>${row.companyName}</td>
                  <td>${row.MobileNumber}</td>
                <td >${row.industry}</td>
                <td></td>
                <td></td>
                <td colspan="3" class="crt-btn" style="text-align: right;">
                                        <a href="#."><img src="../images/tbl-allocate.png">Allocate</a>
                                        <a href="#."><img src="../images/key.png">Generate Credentials</a>
                                        <a href="#."><img src="../images/dropdown.png"></a>
                                    </td>
                
                <td style='color:${statusColor[row.Status]}'>${row.Status}</td>
                  `;
  tableEl.append(trEl);
});

// const newData={
//   "imageUrl":"http://dummyImage/1.png",
//   "id":"1",
//   "companyName":Savorybites,
//   "issueDate":"12/01/24",
//   "paymentDate":"12/01/24",
//   "industry":["Fitness","Cosmeceutical","Non Food"],
//   "MobileNumber":"8956369962",
//   "Status":["Paid","Pending","Cancelled"]
// }
