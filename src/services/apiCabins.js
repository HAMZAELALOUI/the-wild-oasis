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

export async function createCabin(newCabin) {
  //https://zpbiwjnuoimudhtffxwu.supabase.co/storage/v1/object/public/cabin-images/cabin-008.jpg
  //https://zpbiwjnuoimudhtffxwu.supabase.co/storage/v1/object/public/cabin-images/0.4105973932943776-cabin-008.jpg
  //https://zpbiwjnuoimudhtffxwu.supabase.co/storage/v1/object/public/cabin-images/0.590293130304453-cabin-008.jpg

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // 1) create Cabin 
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select()

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

