<script>
export default {

}
</script>

<template>

    <div class="container bg-container py-2 px-4 px-md-0">
        <div class="row p-2 header_bg rounded">
            <div class="col-12 d-flex align-items-center">
                <div class="img_box">
                    <img src="../assets/logo-meteo-no-bg.png" alt="logo-meteo">
                </div>
                <div class="input-group flex-nowrap px-3">
                    <input type="search" class="form-control border-0" placeholder="Cerca una città" aria-label="Username" aria-describedby="addon-wrapping">
                    <span class="input-group-text border-0" id="addon-wrapping"><i class="bi bi-search"></i></span>
                </div>
                <div>
                    <button class="btn p-0 fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-list text-secondary"></i></button>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    ...
                  </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

    .bg-container {
        background-color: rgba(60,204,218,255);
        
        .header_bg {
            background-color: rgba(245,215,6,255);
        }
    }

    .input-group-text {
        background-color: white;
        color: rgba(128, 128, 128, 0.164);
    }


    .img_box {
        width: 50px;
        height: 50px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

</style>
