export const codeTip = [
  `<span data-color="red">function</span> <span data-color="blue">dnnrTip</span>(errors){`,
  ` <span data-color="red" data-spacing="1">try</span>{`,
  `   <span data-color="red" data-spacing="2">const</span> <span data-color="blue">attempt</span> = <span data-color="red">new</span> <span data-color="blue">Attempt</span>(errors);`,
  `   <span data-color="red" data-spacing="2">if</span>(attempt.error) <span data-color="red">throw new</span> <span data-color="blue">Error</span>(<span data-color="yellow">"Learn this"</span>)`,
  `   <span data-color="red" data-spacing="2">else return</span> attempt;`,
  ` <span  data-spacing="1">}</span><span data-color="red">catch</span>(newError){`,
  `   <span data-color="red" data-spacing="2">return</span> <span data-color="blue">dnnrTip</span>(errors.<span>concat</span>(newError))`,
  ' <span data-spacing="1">}</span>',
  '}',
]