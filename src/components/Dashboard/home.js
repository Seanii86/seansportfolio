import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';


const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const repo = form.current[2]?.value;
        const demo = form.current[3]?.value;
        const image = form.current[4]?.files[0];

        const storageRef = ref(storage, `portfolio/${image.name}`)


        ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description,
                        repo,
                        demo,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePortfolio({
                        name,
                        description,
                        repo,
                        demo,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    repo,
                    demo,
                    image: null
                })
            }
        )
    }

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
        } catch (error) {
            alert('Failed to add portfolio');
            console.log(error);
        }
    }

    return (
        <div className="dashboard">

            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" required={true} /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Repo" /></p>
                <p><input type="text" placeholder="Demo" /></p>
                <p><input type="file" placeholder="Image"/><br />Project Image</p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;