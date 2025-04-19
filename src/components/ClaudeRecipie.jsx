import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe({ recipe }) {
    return (<ReactMarkdown>{recipe}</ReactMarkdown>)
}