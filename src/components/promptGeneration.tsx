import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export default async function PromptGeneration() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Tell me a joke about developers' }],
      model: 'gpt-3.5-turbo',
      temperature: 2,
    });
  
    console.log(completion.choices[0]);
    return(
        <div>
            {`${completion.choices[0].message.content}`}
        </div>
    );
  }