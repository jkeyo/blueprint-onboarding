import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import CommentsIcon from '../../assets/comments-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { typography } from '../styles/typography';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.postContainer}>
            <View style={styles.headerRow}>
              <ProfilePlaceholder width={40} height={40} />
              <View style={styles.headerTextColumn}>
                <Text style={typography.p1bold}>
                  neha32 <Text style={typography.p1}>at</Text> Mission Bit
                </Text>
                <Text style={typography.location}>San Francisco, CA</Text>
              </View>
            </View>

            <Image
              source={{
                uri: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
              }}
              style={styles.postImage}
            />

            <View style={styles.postDescription}>
              <Text style={typography.p1}>
                This past weekend, I taught at Mission Bit. I was working with a
                group of high school students who were building their first web
                pages. I really enjoyed being able to help guide 10 students on
                learning CS fundamentals through a project! They were all really
                eager to learn, and I'm glad I signed up. Highly recommend to
                any other software engineers interested in volunteering! Sign-up
                here: https://missionbit.org/get-involved/volunteer-with-us/
              </Text>
            </View>

            <View style={styles.postEngagementText}>
              <Text style={typography.engagements}>3 likes</Text>
              <Text style={typography.engagements}>View 2 comments</Text>
            </View>

            <View style={styles.postEngagementButtons}>
              <View style={styles.leftIcons}>
                <HeartIcon width={24} height={21} />
                <CommentsIcon width={24} height={23.344} />
              </View>
              <ShareIcon width={23} height={20} />
            </View>

            <View style={styles.dateContainer}>
              <Text style={typography.date}>February 1</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.postContainer}>
            <View style={styles.headerRow}>
              <ProfilePlaceholder width={40} height={40} />
              <View style={styles.headerTextColumn}>
                <Text style={typography.p1bold}>
                  aiden_ugh <Text style={typography.p1}>at</Text> Boys and Girls
                  Club
                </Text>
                <Text style={typography.location}>Oakland, CA</Text>
              </View>
            </View>

            <View style={styles.postDescription}>
              <Text style={typography.p1}>
                I recently volunteered at my local Boys and Girls Club!
              </Text>
            </View>
          </View>

          <View style={styles.dividerTwo} />
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
