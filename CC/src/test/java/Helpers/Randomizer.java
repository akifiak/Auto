package Helpers;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class Randomizer {
    Random rand = new Random();
    int n = rand.nextInt(200)+1;

    DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy/HH:mm");
    Date date=new Date();
    String date1=dateFormat.format(date);

}
