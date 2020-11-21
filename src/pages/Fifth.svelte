<script>
    import BackButton from '../components/BackButton.svelte';
import MainButton from '../components/MainButton.svelte';
    import ShareButtons from '../components/ShareButtons.svelte'

    let number = getRandomArbitrary(0, 9);

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    let img_path = './memes/' + number + '.jpg'
    
    let text = "Main page";
</script>

<BackButton></BackButton>
<h1>Thank you</h1>
<div class="img-final">
    <img src={img_path} alt="meme" />
    <p>If you liked our app, share it with your friends and post your memes using the hashtag #16personalities</p>
</div>
<ShareButtons></ShareButtons>
<MainButton buttonText={text}></MainButton>

<style>
    h1 {
        color: #3C9294;
        font-size: var(--hero-fontsize);
    }

    img {
        max-width: 500px;
        width: 100%;
        height: auto;
    }

    p {
        max-width: 500px;
        text-align: center;
        font-weight: 600;
        color: #3C9294;
        font-size: var(--plain-fontsize);
    }


</style>