Why do we need React Query and axios in project

-> To make code in Optimal State

// This is Basic React Hooks Data Fetching

function Users() {
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
const fetchData = async () => {
try {
const response = await axios.get('https://jsonplaceholder.typicode.com/users')
setUsers(response.data)
} catch (err) {
setError(err)
} finally {
setLoading(false)
}
}

    fetchData()

}, [])

// Now we'll use TanStack Query(React Query)

const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  return res.data
}

function Users() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  // Agar queryKey me data hoga toh cache se aayega other wise queryFn run hoga


********************************************

Frontend:- localhost: 5713
Backend:- localhost: 5001

Everthing will be served from an html file 

For production add "start": "node src/server.js" in backend

also upload code to git without node modules and add 

    "build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend",
    "start": "npm run start --prefix backend"

in package.json in root


Ab frontend backend se node modules ko hatane par aur git par push karne ke baad npm run build for dist file
Dist folder is optimized version of react app in form of html file


In serves js:-
  import path from "path"; 
  const __dirname = path.resolve();
  if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    })
  }



NODE_ENV = production (in Backend in env file)

Axios js me frontend me Base url backend wale ko vary karana padega uske baad ek npm run build

