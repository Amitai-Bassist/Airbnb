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
            <img @click="choseMainland('')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832788/ypxaozgl8ypv41zcslzr.jpg" alt="">
            <div>i'm flexible</div>
            </div>
            <div>
            <img @click="choseMainland('Europe')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832796/jmoewtj22cydhrxv8igw.webp" alt="">
            <div>Europe</div>
            </div>
            <div>
            <img @click="choseMainland('France')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832694/iyey3ugv4rrfebpqq4ri.jpg" alt="">
            <div>France</div>
            </div>
            <div>
            <img @click="choseMainland('United States')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832626/rmbkbzyewogvanzfehex.jpg" alt="">
            <div>United States</div>
            </div>
            <div>
            <img @click="choseMainland('United Kingdom')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832717/cxz8hpbk9uuotl3arwni.jpg" alt="">
            <div>United Kingdom</div>
            </div>
            <div>
            <img @click="choseMainland('South America')" class="mainland-img" src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1669832771/vgliecdhjbr1pjdqdrl0.jpg" alt="">
            <div>South America</div>
            </div>
            </section>

        </div>   
    </section>
</template>


<script>
    import { eventBus } from '../services/event-bus.service'

    export default {
        props: {
            
        },
        methods: {
            choseMainland(mainland){
                eventBus.emit('chose-where-mainland', mainland)
            },
        },
    }
</script>