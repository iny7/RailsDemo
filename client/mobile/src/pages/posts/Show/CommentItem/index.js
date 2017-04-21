import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import sdf from 'my-lib/utils/sdf'

import IconButton from 'components/IconButton'
import styles from './styles'

export default class CommentItem extends Component {
  render () {
    const { comment } = this.props
    const { commenter, avatar, content, created_at } = comment
    console.log(commenter, avatar, content, created_at)
    return (
      <View style={styles.comment}>
        <View style={styles.commentLeft}>
          <Image source={{ uri: avatar }} style={styles.avatar}></Image>
        </View>
        <View style={styles.commentRight}>
          <View style={styles.info}>
            <Text style={styles.name}>{commenter}</Text>
            <IconButton name="heart" color={'red'} label={6} style={styles.like} />
          </View>
          <Text style={styles.time}>{sdf(created_at)}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    )
  }
}
