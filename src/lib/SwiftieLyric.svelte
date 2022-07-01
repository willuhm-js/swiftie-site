<script lang="ts">
  import { listen } from "svelte/internal";
import { Songs } from "./SwiftieLyricList.svelte";
  let song, stanza, image;
  
  const randomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const randomSwiftieLyric = () => {
    let SongObject = randomIndex(Songs)
    let stanzaArray = SongObject.lyrics.split("\n\n");
    stanza = randomIndex(stanzaArray).split("\n");
    if (stanza.length < 3 || stanza.length > 5) return randomSwiftieLyric();
    song = SongObject.songTitle;
    image = SongObject.coverArt
  }
  randomSwiftieLyric();
</script>

<figure class="p-4 w-100 rounded" >
  <blockquote class="blockquote text-light" style="min-height: 200px;">
  <img src="{image}" alt="Album cover" width="200px" style="float: left;"/>
    <p>
      {#each stanza as line}
        {#if line.match(/\w/)}
        <span>{line}<br></span>
        {/if}
      {/each}
    </p>
  </blockquote>
  <figcaption class="blockquote-footer mb-2">
   <cite title="Source Title">{song}</cite> by Taylor Swift
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