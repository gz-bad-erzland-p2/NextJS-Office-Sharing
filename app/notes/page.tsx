import Link from 'next/link';
import styles from './notes.module.css';
import CreateNote from "./createNote";
import {PrismaClient} from "@prisma/client";

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getNotes() {
    const prisma = new PrismaClient();
    return await prisma.notes.findMany();
}

export default async function NotesPage() {
    const notes = await getNotes();

    return(
        <div>
            <h1 className={styles.action}>Notes</h1>
            <div className={styles.grid}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>

            <CreateNote />
        </div>
    );
}

function Note({ note }) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className={styles.note}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );
}