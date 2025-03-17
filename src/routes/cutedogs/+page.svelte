
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
    dogs = [...data]; 
  }
}

fetchDogs();

    async function addDog() {
      if (!name || !imageUrl) {
        message = 'Naam en afbeelding zijn verplicht!';
        return;
      }
  
      const { error } = await supabase.from('dogs').insert([
        { name: name, image_url: imageUrl }
      ]);
  
      if (error) {
        message = 'Er is iets misgegaan!';
      } else {
        message = 'Hond succesvol toegevoegd!';
        name = '';
        imageUrl = '';
        fetchDogs(); 
      }
    }
  
    fetchDogs(); 
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
        
        width: 100%;
        justify-content: center;
        padding: 20px;
        align-items: center;  
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }

    input {
      padding: 10px;
      margin: 5px 0;
      width: 75%;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    button {
      padding: 10px;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
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
  