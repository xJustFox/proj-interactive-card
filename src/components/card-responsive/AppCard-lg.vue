<script>
export default {
    name: 'AppCard'
}
</script>

<template lang="">
    <div class="col-12 col-lg-4 p-0">
        <div class="content d-flex justify-content-end align-items-center ">
            <div class="boxCard text-white">

                <!-- Back Card -->
                <div class="backCard">
                    <div class="textBackCard">
                        <div class="cvcCard">000</div>
                    </div>
                </div>

                <!-- Front Card -->
                <div class="frontCard" >
                    <div class="textFrontCard">
                        <img class="logoCard" src="../../assets/card-logo.svg" alt="">
                        <div class="numberCard">1234 5678 9123 0000</div>
                        <div class="nameCard">JANE APPLESEED</div>
                        <div class="dateCard">00/00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.content{
    background-image: url('src/assets/bg-main-mobile.png');
    background-size: cover;
    height: 100vh;
      
    .boxCard{
        position: relative;
        width: 350px;
        height: 420px;
        
        .textBackCard,
        .textFrontCard{
            position: relative;
            height: 100%;
        }
        .backCard,
        .frontCard{
            width: 350px;
            height: 192px;
            position: absolute;
        }
        .frontCard{
            background-image: url('src/assets/bg-card-front.png');
            background-size: cover;
            top: 0;
            left: 135px;

            .logoCard{
                width: 100px;
                padding: 27px;
            }
            .numberCard{
                font-size: x-large;
                position: absolute;
                left: 27px;
                top: 55%;
            }

            .nameCard,
            .dateCard{
                font-size: smaller;
                position: absolute;
                top: 80%;
            }
            .nameCard{
                left: 27px;
            }

            .dateCard{
                right: 27px;
            }
        }
        .backCard{
            background-image: url('src/assets/bg-card-back.png');
            background-size: cover;
            bottom: 0;
            left: 220px;
            .cvcCard{
                position: absolute;
                right: 40px;
                top: 83px;
            }
        
        }
        

    }

}
    
</style>