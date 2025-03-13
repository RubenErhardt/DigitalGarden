
<script>
     import { supabase } from "./supabaseClient";
  
    let name = '';
    let imageUrl = '';
    let message = '';
    let dogs = [];
  
    async function fetchDogs() {
  const { data, error } = await supabase.from('dogs').select('*');

  if (error) {
    console.error('Fout bij ophalen:', error);
  } else {
    console.log('🐶 Gehaalde honden:', data); // Debug info
    dogs = [...data]; // Forceer een UI update
  }
}

fetchDogs();

  
    // ✅ Voeg een nieuwe hond toe aan Supabase en refresh de lijst
    async function addDog() {
      if (!name || !imageUrl) {
        message = 'Naam en afbeelding zijn verplicht!';
        return;
      }
  
      const { error } = await supabase.from('dogs').insert([
        { name: name, image_url: imageUrl }
      ]);
  
      if (error) {
        console.error('Fout bij toevoegen:', error);
        message = 'Er is iets misgegaan!';
      } else {
        message = 'Hond succesvol toegevoegd!';
        name = '';
        imageUrl = '';
        fetchDogs(); // 🔄 Direct de lijst updaten
      }
    }
  
    fetchDogs(); // ✅ Haal de honden op bij het laden van de pagina
  </script>
  
  <main>
  <h1>Voeg een hond toe 🐶</h1>
  
  <input type="text" bind:value={name} placeholder="Hond naam" />
  <input type="text" bind:value={imageUrl} placeholder="Afbeelding URL" />
  <button on:click={addDog}>Toevoegen</button>
  
  <p>{message}</p>
  
  <h2>Gallery 📸</h2>
  <div class="gallery">
    {#each dogs as dog}
      <div class="dog-card">
        <img src={dog.image_url} alt={dog.name} />
        <p>{dog.name}</p>
      </div>
    {/each}
  </div>
</main>
  
  <style>

    main{
        max-width: 1280px;
        margin: 0 auto;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }
  
    .dog-card {
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 8px;
      text-align: center;
      width: 150px;
    }
  
    .dog-card img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
  