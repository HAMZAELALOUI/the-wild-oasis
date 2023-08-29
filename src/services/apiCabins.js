import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

  const { data, error } = await supabase
    .from('cabins')
    .select('*')
  if (error) {
    console.error(error);
    throw new Error('Cabins Can not be Loaded')
  }
  return data;
}

export async function deleteCabin(id) {

  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq("id", id)

  if (error) {
    console.error(error);
    throw new Error('Cabins Can not be Deleted')
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id)
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // 1) create/edit Cabin 
  let query = supabase.from('cabins')
  //A) Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }])

  //B) UPDATE
  if (id) query = query.update({ ...newCabin, image: imagePath })
    .eq('id', id)


  const { data, error } = await query.select().single()
  if (error) {
    console.error(error);
    throw new Error('Cabins Can not be Created')
  }

  // 2) upload image
  const { error: storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)
  // 3) delete the cabin if ther is an error 
  if (storageError) {
    await supabase
      .from('cabins')
      .delete()
      .eq("id", data.id)
    console.error(storageError);
    throw new Error('Cabin Image can not be uploaded , the Cabin was Not Created ')
  }

  return data;
}

