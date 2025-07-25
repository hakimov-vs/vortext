<template>
    <div id="side-bar">
        <div class="header">
            <div class="header-bar">
                <div class="header-menu">
                    <div class="menu-items">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  stroke-linecap="round" ><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
                    </div>
                </div>
                <div class="header-search">
                    <div class="search-items">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        <input type="text" placeholder="search...">
                    </div>
                </div>
            </div>
        </div>
        <div class="chats scrollbar-y-style">
            <h1>Side bar</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis necessitatibus earum aliquam amet, laboriosam assumenda eligendi quasi, laudantium, modi eius iusto reprehenderit provident sit quisquam. Temporibus ratione itaque dolorem.
                Debitis autem dolorum facilis, consectetur explicabo iure cupiditate deserunt omnis sint commodi numquam laboriosam, excepturi voluptatum qui, aspernatur quo ex quae sit aperiam sequi nesciunt vitae! Tempora accusamus sit sed.
                Doloremque asperiores illo ullam ex dolorem ducimus ipsam esse distinctio? Harum porro earum numquam velit nesciunt, id officia quo provident error vel? Ad, praesentium molestiae eius quos nihil reiciendis rem.
                Esse quae consequuntur recusandae incidunt illo quidem commodi, harum veritatis laborum provident soluta, atque ratione quia illum animi maiores autem! Magni consequuntur alias labore earum. A debitis veniam eum. Minus.
                Possimus architecto enim consectetur? Consectetur illum voluptates perferendis expedita quaerat nemo quam molestiae dolores aliquid saepe eveniet voluptate voluptatibus ad quod, asperiores natus enim nulla magni recusandae? Dolor, sapiente beatae?
                Pariatur, repudiandae? Sed debitis laborum ut explicabo nulla eaque magnam at, similique libero, qui assumenda odit. Quidem earum perferendis ut ipsam perspiciatis numquam molestias, rerum saepe unde labore fugit eveniet.
                Fuga ratione doloribus soluta repellendus cupiditate, autem alias atque dolorem sequi delectus aperiam obcaecati aut error, consequuntur fugit officia tempora optio odit ab quibusdam tenetur aspernatur. Odio iure asperiores animi.
                Nisi numquam ipsa voluptatem? Eius tempora atque nisi aliquid aspernatur nesciunt natus error ipsam quidem eum? Inventore possimus sapiente laboriosam tempore minima atque. Possimus pariatur perferendis aliquam repellat eaque soluta!
                Quo non quia natus et, dolores placeat nobis autem aliquam. Vel ipsum velit ipsa corrupti consequuntur eligendi nisi iusto tempore provident itaque officiis eaque officia doloribus est maxime, aliquam repellendus.
                Libero nisi, facilis ullam qui expedita non velit in maxime quos vitae doloribus, delectus cumque illum laudantium autem accusamus aperiam architecto sunt rem harum reiciendis neque perferendis voluptates. Repellendus, officiis.
                Ratione praesentium hic mollitia dicta unde similique est fuga dolores nostrum numquam cum nesciunt ad ipsa iste repudiandae inventore aspernatur dignissimos velit sint, dolorum, officiis laborum. Nisi quae minus sint.
                Reiciendis, laboriosam aperiam necessitatibus dolor enim quaerat, distinctio blanditiis magni praesentium, sequi quia aut. Molestias consequatur, libero tenetur fuga quae voluptatum voluptates iusto sunt esse fugit inventore quasi perspiciatis labore?
                Quae cumque atque dolores minima eius ipsum? Id, aperiam provident exercitationem ea quas deserunt reprehenderit, reiciendis voluptatibus, iste dolor dignissimos aspernatur tenetur eum iure. Eos inventore voluptatibus dicta quis beatae?
                Nostrum praesentium incidunt, voluptatibus qui laborum sint delectus consequuntur cupiditate! Totam, odit. Fugiat, exercitationem? Ea, temporibus, aperiam, architecto nemo veritatis praesentium tempore a obcaecati at tempora magni eum dolorem iusto?
                Earum reprehenderit quis laudantium libero illo fugiat, rerum tempore? Modi eius labore vel dignissimos pariatur, recusandae quas esse ducimus repellendus asperiores ipsa! Vitae obcaecati labore modi asperiores repudiandae perspiciatis consequatur!
                Nostrum commodi consectetur numquam, illo nulla nam. Ipsam placeat magni, nam ipsum, inventore aspernatur nemo eos ut qui atque labore! Omnis et ipsa minima libero porro culpa quam perspiciatis vitae.
                Eum dolore, fuga architecto aspernatur quisquam nam, tempora, velit iusto quidem earum voluptates provident. Rerum omnis ab, dolor doloremque odio magnam dolores quod inventore sapiente itaque reiciendis dolorem numquam ex.
                Similique est itaque nisi suscipit ipsa mollitia quam in amet, iusto molestiae, esse, sint enim accusantium ex qui natus voluptatibus! Dignissimos, optio laboriosam repellendus voluptas asperiores nemo ex eveniet itaque?
                Autem deleniti commodi hic illo mollitia corrupti, veniam cupiditate maxime accusantium facere consequatur, nemo cumque suscipit nulla? Pariatur ex cupiditate debitis sapiente distinctio. Amet, aliquam velit! Repellendus quas aliquid magni.
                Placeat, saepe earum. Aperiam rem perferendis nostrum a cupiditate nam vero dolore eaque tempora ipsum provident nemo fugit quaerat sit, aliquid sint totam quod unde officia nisi voluptatum facere porro?
            </p>
        </div>
    </div>
</template>
<script>
export default{
    name:'SideBar'
}
</script>

<style scoped>
#side-bar{
    width: 430px;
    height: 100%;
    border-right: 1px solid #cccccc;
}

/* .header{
    border-bottom: 1px solid #cccccc;
} */

.header-menu{
    width: 43px;
    display: flex;
    align-items: center;
}

.menu-items{
    width: 43px;
    height: 43px;
    cursor: pointer;
    border-radius: 50%;
    padding: 9px;
    transition:all 0.2s ease;
}

.menu-items:hover{
    background-color:  #e2e4e8;
}

.menu-items svg{
    width: 100%;
    height: 100%;
    color: #707579;
}


.header-search{
    display: flex;
    align-items: center;
    padding-left: 7.5px;
}

.search-items{
    flex-basis: 100%;
    height: 43px;
    position: relative;
}

.search-items svg{
    width: 25px;
    height: 25px;
    position:absolute;
    color: #d4d4d4;
    top: 9px;
    left: 10px;
}

.search-items input{
    height: 100%;
    width: 100%;
    border-radius: 25px;
    padding-left: 40px;
    padding-bottom: 5px;
    border: 1.5px solid #d4d4d4;
    font-size: 20px;
}

/* not yet */
.chats{
    height: calc(100vh - 60px);
    overflow: auto;
}


@media (max-width: 1200px) {
    #side-bar{
        width: 400px;
    }
}

@media (max-width: 900px) {
    #side-bar{
        flex-basis:100%;
    }
}
</style>