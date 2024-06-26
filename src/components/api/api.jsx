const api = 'https://api.example.com'
const User_Id = ''
const Store_Id = ''

//Fetch Projects
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${api}/api/projects?storeId=${Store_Id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching projects:', error)
    return { error: error.message }
  }
}

//FETCH USER DATA
export const fetchUserData = async () => {
  try {
    const response = await fetch(`${api}/api/userData?storeId=${Store_Id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch User Data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching projects:', error)
    return { error: error.message }
  }
}
