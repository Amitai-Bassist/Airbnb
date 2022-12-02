<template>
    <section class="grid stay-where-search">
        <div>
            <h2>Mostly searched</h2>
            <ul>
            
                <li><span>Paris</span></li>
                <li><span>Us</span></li>
                <li><span>Madrid</span></li>
                <li><span>Tel-Aviv</span></li>
            </ul>
            
            
        </div> 
        <hr>  
        <div>
            <h2>Search by region</h2>
            <section class="chose-mainland">
            <div>
            <img @click="choseMainland('all')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg" alt="">
            <div>i'm flexible</div>
            </div>
            <div>
            <img @click="choseMainland('europe')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832796/jmoewtj22cydhrxv8igw.webp" alt="">
            <div>Europe</div>
            </div>
            <div>
            <img @click="choseMainland('france')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832694/iyey3ugv4rrfebpqq4ri.jpg" alt="">
            <div>France</div>
            </div>
            <div>
            <img @click="choseMainland('united states')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832626/rmbkbzyewogvanzfehex.jpg" alt="">
            <div>United States</div>
            </div>
            <div>
            <img @click="choseMainland('united kingdom')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832717/cxz8hpbk9uuotl3arwni.jpg" alt="">
            <div>United Kingdom</div>
            </div>
            <div>
            <img @click="choseMainland('south america')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832771/vgliecdhjbr1pjdqdrl0.jpg" alt="">
            <div>South America</div>
            </div>
            </section>

        </div>   
    </section>
</template>


<script>
    export default {
        props: {
            
        }
    }
</script>