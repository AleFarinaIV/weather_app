<script>
export default {
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        toggleSearchBar() {
            this.visible =!this.visible;
        }
    }
}
</script>

<template>

    <div class="container py-2 px-4 px-md-0">
        <div class="row p-2 rounded">
            <div class="col-12 glass_effect rounded-4">

                <div class="d-flex justify-content-between align-items-center">
                    <div class="img_box">
                        <img src="../assets/logo-meteo-no-bg.png" alt="logo-meteo">
                    </div>
                    <div v-if="visible" class="input-group flex-nowrap px-3">
                        <input type="search" class="form-control border-0" placeholder="Cerca una città" aria-label="Username" aria-describedby="addon-wrapping">
                        <span class="input-group-text border-0" id="addon-wrapping"><i class="bi bi-search"></i></span>
                    </div>
                    <div class="btn bg-white p-0 px-1">
                        <button v-if="!visible" @click="toggleSearchBar" class="btn border-end border-2 rounded-0 pe-2 p-0"><i :class="!visible ? 'bi bi-search' : ''"></i></button>
                        <button :class="visible ? 'ps-0' : 'ps-1'" class="btn p-0 fs-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-list text-secondary"></i></button>
                    </div>
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

    .glass_effect {
      backdrop-filter: blur(30px);
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
