<script lang="ts">
  import { Lyrics } from "./SwiftieLyricList.svelte";
  let song, lyric;
  const randomSwiftieLyric = () => {
    let LyricsObject = Lyrics[Math.floor(Math.random() * Lyrics.length)];
    song = LyricsObject.song;
    lyric = LyricsObject.lyric.split("\n");
  }
  randomSwiftieLyric();
</script>

<figure class="p-4 w-100 rounded">
  <blockquote class="blockquote text-light">
    <p>
      {#each lyric as oneLyric}
      <span>{oneLyric}<br></span>
      {/each}
    </p>
  </blockquote>
  <figcaption class="blockquote-footer mb-2">
    Taylor Swift in <cite title="Source Title">{song}</cite>
  </figcaption>
</figure>
<button on:click={randomSwiftieLyric}>Random Swiftie Lyric</button>

<style>
  figure {
    background-color: rgba(0,0,0,0.25);
  }

  .blockquote-footer {
    color: #b3b3b3;
  }

  figcaption {
    margin-top: 5px;
  }
</style>