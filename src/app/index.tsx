import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { getAllPosts } from '../../api/supabase/queries/query';
import Post, { PostProps } from '../components/Post';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  const [postData, setPostData] = useState<PostProps[] | null>(null);

  useEffect(() => {
    async function loadPosts() {
      const fetchedPosts = await getAllPosts();
      setPostData(fetchedPosts);
    }
    loadPosts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          {postData === null ? (
            <Text>Loading</Text>
          ) : (
            postData.map((post, index) => (
              <View key={index}>
                <Post
                  username={post.username}
                  npo={post.npo}
                  city={post.city}
                  state={post.state}
                  text={post.text}
                  image={post.image}
                  likeCount={post.likeCount}
                />
                <View style={styles.divider} />
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
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
  divider: {
    height: 1,
    backgroundColor: '#E9E9E9',
    width: '100%',
  },
  dateContainer: {
    marginBottom: 10,
  },
  dividerTwo: {
    height: 1,
    backgroundColor: '#E9E9E9',
    width: '100%',
    marginTop: 49,
  },
});
