import styles from '../notes.module.css';
import {Notes, PrismaClient} from "@prisma/client";

async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getNote(noteId: number): Promise<Notes> {
    const prisma = new PrismaClient();
    const data = await prisma.notes.findUnique({
        where: {
            id: noteId
        }
    });
    await delay(2000);
    return data ?? {id: 0, title: '', content: ''};
}

export default async function NotePage({params}) {
    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
            </div>
        </div>
    );
}