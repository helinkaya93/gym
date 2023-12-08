///icon-collapse
document.querySelector(".toggle-menu").addEventListener("click", function () {
  document.querySelector(".toggle-menu").classList.toggle("static");
  console.log(document.querySelector(".toggle-menu").className);
  if (
    document.querySelector(".toggle-menu").className ==
    "navbar-toggle toggle-menu static"
  ) {
    document.querySelector(".navbar-collapse").classList.add("collapse-static");
  } else {
    document
      .querySelector(".navbar-collapse")
      .classList.remove("collapse-static");
  }
});

///menu-collapse
document.querySelectorAll(".nav-link").forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.toggle("active");
  });
});

///active-button sidebar
function activeButton() {
  document
    .querySelector(".sidebar-toggle")
    .addEventListener("click", function () {
      document.querySelector(".sidebar-toggle").classList.toggle("active-s");
      document.querySelector(".sidebar-menu").classList.toggle("active-social");
      document
        .querySelector(".side-social-info")
        .classList.toggle("active-info");
    });
}
activeButton();

////fixed header

document.addEventListener("scroll", function (e) {
  if (window.scrollY >= 40) {
    document.getElementById("navbar-expend").classList.add("scrolled-header");
    document.querySelector(".sidebar-menu").style.opacity = "0";
    document.querySelectorAll(".nav-link").forEach(function (item) {
      if (item.classList == "nav-link active") {
        item.style.color = "#ea1c29";
      } else {
        item.style.color = "black";
      }
    });
    document.querySelector(".sidebar-toggle").style.display = "none";
    return;
  }
  if (window.scrollY < 40) {
    document
      .getElementById("navbar-expend")
      .classList.remove("scrolled-header");
    document.querySelector(".sidebar-menu").style.opacity = "1";

    document.querySelectorAll(".nav-link").forEach(function (item) {
      let width = screen.width;
      if (item.classList == "nav-link active") {
        item.style.color = "#ea1c29";
      } else {
        if (width < 1199) item.style.color = "block";
        else {
          item.style.color = "white";
        }
      }
    });

    document.querySelector(".sidebar-toggle").style.display = "flex";
  }
});

// •••••••••••••••••••••••••••••aryy
const sport = [
  {
    id: 1,
    title: "Dedicated Services",
    des: "Amet lectus ut ullamcorper dui convallis dictumst orci consequat. At senectus ornare amet suscipit. Morbi libero, nisi, diam lorem diam in feugiat risus. Augue augue egestas mauris mauris fames sit at non urna. Maecenas in mi vel viverra ac accumsan eros nibh sed.",
    img: "./assets/bounding.svg",
    photo: "./assets/service-img1.png",
  },
  {
    id: 2,
    title: "Award Programs",
    des: "Tempor pellentesque luctus mi porttitor at orci, tristique. Cursus quam quam vulputate enim. Enim proin congue sed id aenean in quis. Cras turpis varius mauris nunc urna, vitae nisl ullamcorper. Ultricies convallis elementum sed ullamcorper integer sed aliquam volutpat, blandit. Porta.",
    img: "./assets/qualified.svg",
    photo: "./assets/service-img2.png",
  },
  {
    id: 3,
    title: "Organic Proteins",
    des: "Dui, consectetur nibh sed libero massa enim consequat pellentesque. Gravida arcu mi amet neque. Aliquam pharetra euismod lectus mattis lobortis eu aliquam. Semper sit pretium sit vulputate commodo, volutpat bibendum quis. Et quisque eget tellus hendrerit id morbi magna tortor enim non.",
    img: "./assets/organic.svg",
    photo: "./assets/service-img3.png",
  },
  {
    id: 4,
    title: "Award Programs",
    des: " itae quisque aenean molestie risus imperdiet vulputate etiam id. Fames et lectus sagittis, aliquet sed. Odio aliquam, eget iaculis vel pulvinar lacus sem mollis. Pharetra quam velit lectus accumsan et euismod morbi vitae elementum. Eget massa tempor urna, placerat at blandit.",
    img: "./assets/award.svg",
    photo: "./assets/service-img4.png",
  },
];

function sportlist() {
  document.getElementById("build-best").innerHTML = sport
    .map((item) => {
      return ` <div class="col-12 col-md-6 col-lg-6 p-30  animate__flipInX animate__animated animate__delay-8s">
    <div class="services-box">
      <div class="services-content">
        <div class="services-wrap">
          <div class="instructor">
            <div class="service-ic">
              <img src=${item.img} alt="boundibox" />
            </div>
            <div class="service-title">${item.title}</div>
          </div>
          <p class="blogs-block m-0 text-start">
            ${item.des}
          </p>
        </div>
      </div>
      <img
        src=${item.photo}
        alt="service-imag"
        class="img-cover img-fluid"
      />
    </div>
  </div>`;
    })
    .join("");
}

const number = [
  { img: "./assets/headphone.svg", title: "Expert Trainer", num: "80" },
  { img: "./assets/rating.svg", title: "Client Feedback", num: "120" },
  { img: "./assets/gym.svg", title: "Total Branches", num: "100" },
  { img: "./assets/winning.svg", title: "Award Winning", num: "70" },
];

function colNum() {
  document.getElementById("counter").innerHTML = number
    .map(function (item) {
      return ` <div class="col-12 col-sm-6 col-lg-3">
    <div class="countdown-formula text-center">
      <div class="counter-image">
        <img
          src=${item.img}
          alt="headphone"
          class="img-fluid"
        />
      </div>
      <h4 class="m-0">
        <span class="coundown-number" data-number=${item.num}></span>
      </h4>
      <div class="sub-info">${item.title}</div>
    </div>
  </div>`;
    })
    .join("");
  const counters = document.querySelectorAll(".coundown-number");
  const speed = 5000;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("data-number");

      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };
    animate();
  });
}

const table = [
  {
    img: "./assets/trainer-img1.png",
    title: "Trainer",
    name: "Ketty Smith",
    des: " Consectetur morbi sed gravida diam. Sed in felis a pellentesque vel molestie cras vitae. Feugiat elit turpis sed sed viverra. Ante amet praesent aliquet neque, enim orci, felis. Eros.",
  },
  {
    img: "./assets/trainer-img2.png",
    title: "Trainer",
    name: "Ketty Smith",
    des: "Consectetur morbi sed gravida diam. Sed in felis a pellentesque vel molestie cras vitae. Feugiat elit turpis sed sed viverra. Ante amet praesent aliquet neque, enim orci, felis. Eros.",
  },
  {
    img: "./assets/trainer-img3.png",
    title: "Trainer",
    name: "Ketty Smith",
    des: " Consectetur morbi sed gravida diam. Sed in felis a pellentesque vel molestie cras vitae. Feugiat elit turpis sed sed viverra. Ante amet praesent aliquet neque, enim orci, felis. Eros.",
  },
  {
    img: "./assets/trainer-img4.png",
    title: "Trainer",
    name: "Ketty Smith",
    des: " Consectetur morbi sed gravida diam. Sed in felis a pellentesque vel molestie cras vitae. Feugiat elit turpis sed sed viverra. Ante amet praesent aliquet neque, enim orci, felis. Eros.",
  },
  {
    img: "./assets/trainer-img5.png",
    title: "Trainer",
    name: "Ketty Smith",
    des: " Consectetur morbi sed gravida diam. Sed in felis a pellentesque vel molestie cras vitae. Feugiat elit turpis sed sed viverra. Ante amet praesent aliquet neque, enim orci, felis. Eros.",
  },
  {
    img: "./assets/trainer-img4.png",
    title: "Trainer",
    name: "Ketty Smith",
    des: " Consectetur morbi sed gravida diam. Sed in felis a pellentesque vel molestie cras vitae. Ante amet praesent aliquet neque, enim orci, felis. ErosAnte amet praesent aliquet neque, enim orci, felis. Eros.",
  },
  {
    img: "./assets/trainer-img3.png",
    title: "Trainer",
    name: "Ketty Smith",
    des: "Consectetur morbi sed gravida diam. Sed in felis a pellentesque vel molestie cras vitae. Feugiat elit turpis sed sed viverra. Ante amet praesent aliquet neque, enim orci, felis. Eros.",
  },
];
function ShowSlide() {
  document.getElementById("slider").innerHTML = table
    .map((user) => {
      return `<div class="team-box ">
      <div class="border-shape">
        <img src="${user.img}" >

      </div>
      <div class="box-inner">
        <h5 class="trainer-name m-0 text-center">${user.name}</h5>
        <p class="designation m-0">Trainer</p>
        <p class="trainer-detail m-0">${user.des}</p>

      </div>
      <ul class="team-social">
        <li class="ic-list">
            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
        </li>
        <li class="ic-list">
            <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
        </li>
        <li class="ic-list">
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
        </li>
    </ul>
    </div>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  sportlist();
  colNum();

  ShowSlide();

  setInterval(() => {
    document.getElementById("preloader").style.display = "none";
  }, 3500);

  // async function getList(params = {}) {
  //   const response = await fetch(`${baseUrl}/user?page=2&limit=8`, {
  //     headers: {
  //       "app-id": "63c2978c5ade8a17e4d555b6",
  //     },
  //     ...params,
  //   });
  //   return response.json();
  // }

  // getList().then((data) => {
  //   ShowSlide(data.data);
  // });
});

const baseUrl = "https://dummyapi.io/data/v1";
