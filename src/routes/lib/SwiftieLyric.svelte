<script lang="ts">
    import { Songs } from "./SwiftieLyricList.svelte";
      let song, stanza, image;
      
      const randomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)];
      
      const randomSwiftieLyric = () => {
        let SongObject = randomIndex(Songs)
        let stanzaArray = SongObject.lyrics.split("\n\n");
        stanza = randomIndex(stanzaArray).split("\n");
        if (stanza.length < 3 || stanza.length > 4) return randomSwiftieLyric();
        song = SongObject.songTitle;
        image = SongObject.coverArt
      }
      randomSwiftieLyric();
    </script>
    
    <figure class="p-4 w-100 rounded mb-2 d-flex align-items-center justify-content-around" >
      <img src="{image}" alt="Album cover" width="200px" class="m-3"/>
      <div>
        <blockquote class="mb-2 blockquote text-light d-flex align-items-center" style="min-height: 200px;">
          <p>
            {#each stanza as line}
              {#if line.match(/\w/)}
              <span>{line}<br></span>
              {/if}
            {/each}
          </p>
        </blockquote>
        <div class="blockquote-footer mb-2">
          <cite title="Source Title">{song}</cite>
        </div>
      </div>
    </figure>
    <button class="text-light w-100 btn btn-swiftie" on:click={randomSwiftieLyric}>Click Me!</button>
    
    <style>
      figure, .btn-swiftie {
        background-color: rgba(0,0,0,0.25);
      }
    
      .blockquote-footer {
        color: #b3b3b3;
      }
    </style>