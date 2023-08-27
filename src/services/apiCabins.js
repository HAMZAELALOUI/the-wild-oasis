import supabase from "./supabase";

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

