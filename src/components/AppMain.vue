<script>
export default {

}
</script>

<template>

    <div class="container mt-3">
        <div class="row p-2">
          <div class="jumbo_bg mb-3 rounded-4 text-white">
            <div class="col-12 jumbo_col">
              <div class="d-flex flex-column justify-content-between">
                <h1 class="fw-bolder mt-2">04/03</h1>
              </div>
              <div class="jumbo_box">
                <img src="../assets/hottest-sun-nobg.png" alt="">
              </div>
            </div>
            <div class="glass_effect border border-2 border-warning rounded-4 mb-3 p-1">
              <h4 class="m-0">Current Weather</h4>
              <p class="mb-2">Hot Sun</p>
              <div class="col-12 d-flex">
                <div class="border border-2 border-warning rounded-4">
                    <div class="d-flex p-0 py-2 text-center">
                      <div class="d-flex flex-column p-1 fs_small">
                        <p class="m-0">Wind Speed</p>
                        <p class="m-0">15 km/h</p>
                      </div>
                      <div class="d-flex flex-column p-1 fs_small">
                        <p class="m-0">Wind Speed</p>
                        <p class="m-0">15 km/h</p>
                      </div>
                      <div class="d-flex flex-column p-1 fs_small">
                        <p class="m-0">Wind Speed</p>
                        <p class="m-0">15 km/h</p>
                      </div>
                    </div>
                </div>
                <div class="border border-2 border-warning rounded-4 d-flex flex-column justify-content-center mx-2">
                  <p class="m-0 fs-1 fw-bolder px-3">38°</p>
                </div>
              </div>
            </div>
          </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                    <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                     <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                     <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                    <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                    <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                    <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                    <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
            <div class="col-3 p-1">
                <div class="card">
                  <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
                    <p class="m-0">Day</p>
                    <!-- <i class="bi bi-sun-fill my-3 d-block"></i> -->
                    <div class="img_box">
                      <img src="../assets/hottest-sun-nobg.png" alt="">
                    </div>
                    <p class="m-0">Weather</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<style>

.glass_effect {
  backdrop-filter: blur(30px);
  box-shadow: -5px 0px 10px rgb(245, 213, 6);
}

.jumbo_bg {
  background-image: url("../assets/hot-cloud-cover-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.jumbo_col {
  position: relative;
  height: 170px;

  .jumbo_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.fs_small {
  font-size: 10px;
}

.img_box {
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
