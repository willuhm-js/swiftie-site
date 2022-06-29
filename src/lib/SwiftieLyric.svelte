<script>
  import { Lyrics } from "./SwiftieLyricList.svelte";
  let SwiftieLyricObject;
  const randomSwiftieLyric = () => {
    SwiftieLyricObject = Lyrics[Math.floor(Math.random() * Lyrics.length)];
  }
  randomSwiftieLyric();
</script>

<figure class="p-3 w-100 rounded">
  <blockquote class="blockquote text-light">
    <p>{SwiftieLyricObject.lyric}</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Taylor Swift in <cite title="Source Title">{SwiftieLyricObject.song}</cite>
  </figcaption>
</figure>
<button on:click={randomSwiftieLyric}>Random Swiftie Lyric</button>

<style>
  figure {
    background-color: rgba(0,0,0,0.25);
  }
</style>