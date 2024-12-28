import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
export default function Recipe({ recipe }) {
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
            <Markdown remarkPlugins={[ remarkGfm ]}>{recipe}</Markdown>

        </section>
    )
}