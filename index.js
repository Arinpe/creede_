// // generate DID
//   // console.log("Script loaded!"  );
// const createDID = async () => {
//     const { Web5 } = await import("@web5/api/browser");
//     const { web5, did } = await Web5.connect();
//     // the did here would be the user's device did;
//     setUserDid(did);
//   };
//   // create a custom hook to always stay connected
  
//   const useWeb5 = () => {
//     const [web5, setWeb5] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [did, setDid] = useState("");
  
//     useEffect(() => {
//       const initWeb5 = async () => {
//         setLoading(true);
//         // @ts-ignore
//         const { Web5 } = await import("@web5/api/browser");
//         try {
//           const { web5, did } = await Web5.connect();
//           setWeb5(web5);
//           setDid(did);
//           setLoading(false);
//         } catch (error) {
//           console.error("Error initializing Web5", error);
//           setLoading(false);
//           setError();
//         }
//       };
  
//       initWeb5();
//     }, []);
//     return { web5, did, loading, error };
//   };
//   // const {web5} = useWeb5()
//   const createAccount = async () => {
//     const profile = {
//       fullName: "",
//       institutionName: "",
//       positionAtInstitution: "",
//     };
  
//     try {
//       const { record } = await web5.dwn.records.create({
//         data: profile,
//         message: {
//           schema: "http://example.com/profile",
//           dataFormat: "application/json",
//         },
//       });
//       setLoading(false);
  
//       // redirect if successful? 
//     } catch (error) {
//       console.error("Error creating DID:", error);
//       setLoading(false);
//       setError(true);
//     }
//   };

  window.addEventListener('DOMContentLoaded', () => {
    const generateDid = async () => {
      const connectedDidInstance = await Web5.Web5.connect();
      return connectedDidInstance.did;
    }

    document.querySelector("#didGeneratorBtn").addEventListener('click', async () => {
      const did = await generateDid()
      document.querySelector('#didResult').innerHTML = did;
      console.log('User DID is: ', did)
    })
  })
  