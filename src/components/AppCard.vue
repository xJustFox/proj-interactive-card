<script>
export default {
    name: 'AppCard.vue'
    
}
</script>

<template lang="">
    <main>
        <div class="container-fluid ">
            <div class="row">
                <div class="col-12 p-0 ">
                    <div class="content d-flex justify-content-center">
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
                                    <img class="logoCard" src="../assets/card-logo.svg" alt="">
                                    <div class="numberCard">1234 5678 9123 0000</div>
                                    <div class="nameCard">JANE APPLESEED</div>
                                    <div class="dateCard">00/00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 p-0 d-flex justify-content-center">
                    <div class="contentForm">
                        <div>
                            <div class="row g-3">

                                <!-- Name Card User -->
                                <div class="col-12">
                                    <label for="cardName" class="form-label">CARDHOLDER NAME</label>
                                    <input type="text" class="form-control" id="cardName" placeholder="e/g. Jane Appleseed">
                                </div>

                                <!-- Card Number -->
                                <div class="col-12">
                                  <label for="cardNum" class="form-label">CARD NUMBER</label>
                                  <input type="text" class="form-control" id="cardNum" placeholder="e/g. 1234 5678 9123 0000">
                                </div>

                                <!-- Card Month -->
                                <div class="col-3">
                                    <label for="cardDate" class="form-label">EXP. DATE</label>
                                    <input type="text" class="form-control" id="cardDate" placeholder="MM">
                                </div>
                                
                                <!-- Card Year -->
                                <div class="col-3">
                                    <label for="cardYear" class="form-label">(MM/YY)</label>
                                    <input type="text" class="form-control" id="cardYear" placeholder="YY">
                                </div>

                                <!-- Card CVC -->
                                <div class="col-6">
                                    <label for="cardCvc" class="form-label">CVC</label>
                                    <input type="text" id="cardCvc" class="form-control" placeholder="e/g. 123">
                                </div>
                                
                                <div class="col-12">
                                  <div class="my-btn">Confirm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.content{
    background-image: url('../assets/bg-main-mobile.png');
    background-size: cover;
    height: 230px;
    
    
    .boxCard{
        position: relative;
        width: 380px;
        height: 100%;
        
        .textBackCard,
        .textFrontCard{
            position: relative;
            height: 100%;
        }
        .backCard,
        .frontCard{
            width: 300px;
            height: 165px;
            position: absolute;
        }
        
        .backCard{
            background-image: url('src/assets/bg-card-back.png');
            background-size: cover;
            top: 30px;
            right: 10px;
            .cvcCard{
                position: absolute;
                right: 35px;
                top: 70px;
            }
        
        }
        
        .frontCard{
            background-image: url('src/assets/bg-card-front.png');
            background-size: cover;
            top: 54%;
            right: 70px;

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

    }

}

.contentForm{
    width: 360px;
    padding-top: 120px;

    .my-btn{
        margin-top: 20px;
        text-align: center;
        color: white;
        padding: 15px;
        border-radius: 10px;
        font-weight: 600;
        background: $my-darkViolet;

        &:hover{
            cursor: pointer;
        }
    }
}
    
</style>