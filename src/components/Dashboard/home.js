import { useRef } from "react";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore/lite'

export default function Home() {
    const form = useRef();

    const submitProject = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const repo = form.current[2]?.value;
        const image = form.current[3]?.files[0];
        const demo = form.current[4]?.value;

        console.log(name, description, repo, image, demo)

        const storageRef = ref(storage, `portfolio/${image.name}`)

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    saveProject({
                        name,
                        description,
                        repo,
                        image: downloadUrl,
                        demo,
                    })
                })
            }
        )
    }


    const saveProject = async (portfolio) => {
        console.log(portfolio);
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
        } catch (error) {
            alert('Failed :(', error)
        }
    }
    
    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitProject}>
                <p><input type='text' placeholder="name" /></p>
                <p><textarea placeholder="description"  /></p>
                <p><input type='text' placeholder="repo"  /></p>
                <p><input type='file' placeholder="image" /></p>
                <p><input type='text' placeholder="demo" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}