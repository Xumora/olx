import childrenWorld from "./childrenWorld"
import estate from "./estate"
import transport from "./transport"
import job from "./job"
import animals from "./animals"
import garden from "./garden"
import electronics from "./electronics"
import services from "./services"
import style from "./style"
import hobby from "./hobby"
import free from "./free"
import barter from "./barter"


const data = {
    childrenWorld: childrenWorld,
    estate: estate,
    transport: transport,
    job: job,
    animals: animals,
    garden: garden,
    electronics: electronics,
    services: services,
    style: style,
    hobby: hobby,
    free: free,
    barter: barter
}

// const data2 = [
//     { data: detskiyMir, category: "detskiy-mir" },
//     { data: nedvijimost, category: "nedvijimost" },
// ]

// const selectedData2 = data2.filter(v => v.category == "nedvijimost")[0].data;

export default data;