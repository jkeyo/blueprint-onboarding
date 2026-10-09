import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { typography } from '../styles/typography';

export interface PostProps {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string;
  likeCount: number;
}

export default function Post({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
}: PostProps) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerRow}>
        <ProfilePlaceholder width={40} height={40} />
        <View style={styles.headerTextColumn}>
          <Text style={typography.p1bold}>
            {username} <Text style={typography.p1}>at</Text> {npo}
          </Text>
          <Text style={typography.location}>
            {city}, {state}
          </Text>
        </View>
      </View>

      <Image source={{ uri: image }} style={styles.postImage} />

      <View style={styles.postDescription}>
        <Text style={typography.p1}>{text}</Text>
      </View>

      <View style={styles.postEngagementText}>
        <Text style={typography.engagements}>{likeCount} likes</Text>
        <Text style={typography.engagements}>View comments</Text>
      </View>

      <View style={styles.postEngagementButtons}>
        <View style={styles.leftIcons}>
          <HeartIcon width={24} height={21} />
          <CommentsIcon width={24} height={23.344} />
        </View>
        <ShareIcon width={23} height={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    paddingHorizontal: 15,
    paddingTop: 17,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
    gap: 15,
  },
  headerTextColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    marginBottom: 9,
  },
  postEngagementText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
    gap: 14,
  },
  postEngagementButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
