import {createRemoteFileNode} from "gatsby-source-filesystem"

async function onCreateNode({ node, cache, actions, store, createNodeId }) {
  let fileNode
  const { createNode } = actions
  if (node.internal.type === "InstagramContent") {
    try {
      fileNode = await createRemoteFileNode({
        url: node.media_url,
        parentNodeId: node.id,
        store,
        cache,
        createNode,
        createNodeId
      })
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }
    if (fileNode) {
      node.localImage___NODE = fileNode.id
    }
}

export default onCreateNode
