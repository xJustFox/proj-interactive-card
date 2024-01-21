<script>
import AppCard from './card-responsive/AppCard.vue';
import AppCardLg from './card-responsive/AppCard-lg.vue';
export default {
    name: 'AppInteractiveCard',
    components: {
        AppCard,
        AppCardLg,
    }
    
}
</script>

<template>
    <main>
        <div class="container-fluid ">
            <div class="row flex-lg-row">

                <!-- Left Container -->
                <AppCard v-if="$matches.md.max" />
                <AppCardLg v-if="$matches.lg.min"  />

                <!-- Right Container -->
                <div class="col-12 col-lg-8  p-0 px-lg-4 px-xl-0 d-flex justify-content-center align-items-lg-center justify-content-lg-end justify-content-xl-center">
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