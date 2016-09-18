#What is Codrama?
JavaScript를 배우며 helper 함수를 배우고 작성하는데 도움이 되는 방법을 찾던 중, 스토리 전개를 이용하면 좋을 것 같아 시도해 보았던 방법.

아래는 helper function을 이용해 처음 만들었던 codrama:

  // 드라마 changingNodePosition
`function changingNodePosition(moving_node, target_node) {`

  // 줄거리(목적): 남자와 여자의 만남이 엇갈림(각각 있던 자리를 바꿈)

  // moving_node는 여주인공
  // target_node는 남자주인공

`  var next_node = moving_node.nextSibling;`
  // 여자의 주소를 알기 위해선 먼저 자매(여자의 동생)을 찾아가는 일
`  target_node.parentNode.replaceChild(moving_node, target_node);`
  // 여자는 남자를 찾아가기 위해 먼저 남자의 부모가 살고 있는 집을 찾아 갔다. 그러나..
`  if (next_node) {`
`    next_node.parentNode.insertBefore(target_node, next_node);`
    // 남자는 여자를 찾아 부모님과 함께 사는 여주의 자매를 찾아 가고, 여주의 방이 있는 자매의 윗층으로 들어간다.
`  } else {`
`    moving_node.parentNode.appendChild(target_node)`
    // 만약 여주의 동생을 찾지 못하더라도 일단 그녀의 부모님 집으로 들어간다.
`  }`
`}`
