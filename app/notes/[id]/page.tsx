import styles from '../notes.module.css';

async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getNote(noteId: string) {
    const res = await fetch(
        `${process.env.DB_URL}/${noteId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    await delay(2000);
    return data;
}

export default async function NotePage({ params }) {
    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    );
}