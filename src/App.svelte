<script>
  import SwiftieLyric from './lib/SwiftieLyric.svelte'
</script>

<main>
  <div class="text-center">
    <h1 class="display-1 mt-3 mb-4 fw-bold">swiftie</h1>
    <p class="fst-italic" style="font-size: 25px;">You can't spell awesome without me!</p>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <div class="col-9 col-lg-6">
      <SwiftieLyric />
    </div>
  </div>
</main>

<style>
   @font-face { font-family: TaylorSwift; src: url('/TaylorSwift.ttf'); }
   h1 {
        font-family: TaylorSwift;
        text-align: center;
   }

   h1, p {
        color: white;
   }
</style>